interface VideoSchemaProps {
  title: string
  description: string
  thumbnailUrl: string
  videoUrl?: string
  duration?: string
  uploadDate?: string
  lang: 'en' | 'el'
}

export function VideoSchema({ 
  title, 
  description, 
  thumbnailUrl, 
  videoUrl, 
  duration, 
  uploadDate,
  lang 
}: VideoSchemaProps) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    ...(videoUrl && { "contentUrl": videoUrl }),
    ...(duration && { "duration": duration }),
    ...(uploadDate && { "uploadDate": uploadDate }),
    "inLanguage": lang === 'el' ? 'el-GR' : 'en-US'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(videoSchema, null, 2)
      }}
    />
  )
}
