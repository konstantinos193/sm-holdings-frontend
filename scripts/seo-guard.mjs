#!/usr/bin/env node
/**
 * SEO guard — fails the build (static mode) or a deploy check (live mode)
 * when the regressions the 2026-09 audit found come back.
 *
 *   node scripts/seo-guard.mjs              # static: source + message files
 *   node scripts/seo-guard.mjs --url=https://smholdings.gr   # live: crawl sitemap
 *
 * Static checks
 *   - placeholder data in src/ and messages (example.com, 123 Main Street, +1 (234), XXX numbers, demo names)
 *   - every t('key') used in src/ exists in BOTH en.json and el.json
 *   - every key in routes.config.js has both slugs
 * Live checks (per sitemap URL)
 *   - HTTP 200, exactly one <h1>, non-empty <title> without a doubled brand
 *   - self-referencing canonical, hreflang en-US / el-GR / x-default
 *   - no leaked translation keys, no placeholder strings, no client "Loading..." shell
 *   - robots.txt and sitemap.xml reachable; sitemap lastmod not "now"
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const args = Object.fromEntries(process.argv.slice(2).map((a) => { const [k, v] = a.replace(/^--/, '').split('='); return [k, v ?? true] }))

const PLACEHOLDER_PATTERNS = [
  /example\.com/i,
  /123 Main Street/i,
  /\+1 \(234\)/,
  /\+30 XXX/i,
  /\bJohn Smith\b|\bJane Doe\b|\bMike Johnson\b|\bSarah Williams\b/,
  /lorem ipsum/i,
  /Company Image/,
]
const KEY_LEAK = />\s*[a-zA-Z]+(?:\.[a-zA-Z0-9_]+){1,}\s*</g // ">footer.links.aboutUs<"

let failures = 0
const fail = (msg) => { failures++; console.error(`✗ ${msg}`) }
const ok = (msg) => console.log(`✓ ${msg}`)

function walk(dir, exts, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const s = statSync(p)
    if (s.isDirectory()) { if (!/node_modules|\.next/.test(name)) walk(p, exts, out) }
    else if (exts.includes(extname(name))) out.push(p)
  }
  return out
}

function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o && typeof o === 'object' ? o[k] : undefined), obj)
}

function staticChecks() {
  const src = join(ROOT, 'src')
  const files = walk(src, ['.ts', '.tsx', '.json'])
  const en = JSON.parse(readFileSync(join(src, 'messages/en.json'), 'utf8'))
  const el = JSON.parse(readFileSync(join(src, 'messages/el.json'), 'utf8'))

  // 1. placeholders anywhere in source. Dev-only fixtures that never render in
  //    production (mock data behind USE_MOCK_DATA=false, local auth stubs) are
  //    exempt; everything a visitor or crawler could see is checked.
  const FIXTURES = [/[\\/]lib[\\/]mockData\.ts$/, /[\\/]lib[\\/]api[\\/]bookings\.ts$/, /[\\/]lib[\\/]store[\\/]auth\.store\.ts$/]
  for (const f of files) {
    if (FIXTURES.some((re) => re.test(f))) continue
    const text = readFileSync(f, 'utf8')
    for (const re of PLACEHOLDER_PATTERNS) {
      if (re.test(text)) fail(`placeholder ${re} in ${f.replace(ROOT, '')}`)
    }
  }

  // 2. translation keys used in code exist in both dictionaries
  const missing = new Set()
  for (const f of files.filter((f) => /\.tsx?$/.test(f))) {
    const text = readFileSync(f, 'utf8')
    for (const m of text.matchAll(/\bt\(\s*'([a-zA-Z0-9_.]+)'/g)) {
      const key = m[1]
      if (getByPath(en, key) === undefined) missing.add(`en:${key} (${f.replace(ROOT, '')})`)
      if (getByPath(el, key) === undefined) missing.add(`el:${key} (${f.replace(ROOT, '')})`)
    }
  }
  for (const m of missing) fail(`missing translation ${m}`)

  // 3. route map integrity
  const { routes } = require(join(ROOT, 'routes.config.js'))
  for (const [key, r] of Object.entries(routes)) {
    if (typeof r.en !== 'string' || typeof r.el !== 'string') fail(`route ${key} is missing en/el slug`)
    if (/[^a-z0-9/-]/.test(r.en) || /[^a-z0-9/-]/.test(r.el)) fail(`route ${key} has a non-ASCII or uppercase slug`)
  }

  if (!failures) ok(`static checks passed (${files.length} files, ${Object.keys(routes).length} routes)`)
}

async function liveChecks(base) {
  base = base.replace(/\/$/, '')
  const get = async (url, opts = {}) => {
    const res = await fetch(url, { redirect: 'manual', headers: { 'user-agent': 'smholdings-seo-guard' }, ...opts })
    return { status: res.status, text: res.status === 200 ? await res.text() : '', headers: res.headers }
  }

  const robots = await get(`${base}/robots.txt`)
  robots.status === 200 && /Sitemap:/.test(robots.text) ? ok('robots.txt') : fail(`robots.txt status ${robots.status}`)

  const sm = await get(`${base}/sitemap.xml`)
  if (sm.status !== 200) return fail(`sitemap.xml status ${sm.status}`)
  // The sitemap always carries production URLs; when checking a local or
  // preview build, fetch them from the base under test instead.
  const PROD = 'https://smholdings.gr'
  const urls = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(PROD, base))
  const canonicalOf = (url) => url.replace(base, PROD)
  const lastmods = new Set([...sm.text.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]))
  const today = new Date().toISOString().slice(0, 10)
  if ([...lastmods].every((d) => d.startsWith(today)) && lastmods.size > 0 && urls.length > 3) fail('sitemap lastmod is "now" for every URL')
  ok(`sitemap.xml (${urls.length} urls)`)

  const root = await get(`${base}/`)
  ;[301, 308].includes(root.status) ? ok(`/ -> ${root.status} ${root.headers.get('location')}`) : fail(`/ should be a permanent redirect, got ${root.status}`)

  for (const url of urls) {
    const page = await get(url, { redirect: 'follow' })
    if (page.status !== 200) { fail(`${url} status ${page.status}`); continue }
    const html = page.text
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || ''
    if (!title.trim()) fail(`${url} empty <title>`)
    if (/SM Holdings.*SM Holdings|SMH Real Estate.*SMH Real Estate/.test(title)) fail(`${url} doubled brand in title: ${title}`)
    const h1s = html.match(/<h1[\s>]/g) || []
    if (h1s.length !== 1) fail(`${url} has ${h1s.length} <h1>`)
    const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
    if (canonical !== canonicalOf(url)) fail(`${url} canonical is ${canonical}`)
    for (const hl of ['en-US', 'el-GR', 'x-default']) {
      if (!new RegExp(`hrefLang="${hl}"`, 'i').test(html)) fail(`${url} missing hreflang ${hl}`)
    }
    const leaks = [...html.matchAll(KEY_LEAK)].map((m) => m[0]).filter((s) => !/\d+\.\d+/.test(s) && !/\.(gr|com|net|org|eu|io)\s*<$/i.test(s))
    if (leaks.length) fail(`${url} leaked translation keys: ${[...new Set(leaks)].slice(0, 5).join(' ')}`)
    for (const re of PLACEHOLDER_PATTERNS) if (re.test(html)) fail(`${url} placeholder ${re}`)
    if (/<main[^>]*>[\s\S]{0,400}Loading\.\.\./.test(html)) fail(`${url} renders a client "Loading..." shell`)
    if (!/application\/ld\+json/.test(html)) fail(`${url} has no JSON-LD`)
  }
  if (!failures) ok(`live checks passed for ${urls.length} URLs`)
}

if (args.url) await liveChecks(String(args.url))
else staticChecks()

if (failures) { console.error(`\n${failures} SEO guard failure(s)`); process.exit(1) }
