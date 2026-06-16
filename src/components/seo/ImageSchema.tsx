interface ImageSchemaProps {
  imageUrl: string
  title: string
  description: string
  width?: number
  height?: number
  propertyUrl?: string
  lang: 'en' | 'el'
}

export function ImageSchema({ 
  imageUrl, 
  title, 
  description, 
  width, 
  height, 
  propertyUrl,
  lang 
}: ImageSchemaProps) {
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": imageUrl,
    "name": title,
    "description": description,
    ...(width && { "width": width }),
    ...(height && { "height": height }),
    ...(propertyUrl && { 
      "about": {
        "@type": "Thing",
        "name": title,
        "url": propertyUrl
      }
    }),
    "inLanguage": lang === 'el' ? 'el-GR' : 'en-US'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(imageSchema, null, 2)
      }}
    />
  )
}
