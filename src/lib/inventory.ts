import { serverFetch } from '@/lib/api/server'
import type { Property } from '@/types/property'

/**
 * Real inventory facts for hub pages. Counts come from the live API, never
 * from hard-coded numbers, so a location or type is only shown when it has
 * at least one active listing.
 */
export async function fetchAllProperties(): Promise<Property[]> {
  try {
    const res = await serverFetch<{ success: boolean; data: { properties: Property[] } }>('/properties?limit=500&page=1')
    return res.success ? res.data.properties.filter((p) => !p.status || p.status === 'ACTIVE') : []
  } catch {
    return []
  }
}

export type CountEntry = { key: string; count: number }

export function countBy(properties: Property[], pick: (p: Property) => string | undefined | null): CountEntry[] {
  const map = new Map<string, number>()
  for (const p of properties) {
    const k = (pick(p) ?? '').trim()
    if (!k) continue
    map.set(k, (map.get(k) ?? 0) + 1)
  }
  return [...map.entries()].map(([key, count]) => ({ key, count })).sort((a, b) => b.count - a.count)
}
