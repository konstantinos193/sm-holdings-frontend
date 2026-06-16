import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { ImageSchema } from './ImageSchema'

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string
  title?: string
  description?: string
  propertyUrl?: string
  lang: 'en' | 'el'
  addSchema?: boolean
}

export function OptimizedImage({
  alt,
  title,
  description,
  propertyUrl,
  lang,
  addSchema = false,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const imageTitle = title || alt
  const imageDescription = description || alt

  const handleError = () => {
    setError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Generate structured data if requested
  const schemaData = addSchema && props.src ? {
    imageUrl: typeof props.src === 'string' ? props.src : props.src.toString(),
    title: imageTitle,
    description: imageDescription,
    width: typeof props.width === 'number' ? props.width : undefined,
    height: typeof props.height === 'number' ? props.height : undefined,
    propertyUrl,
    lang
  } : null

  return (
    <>
      {schemaData && <ImageSchema {...schemaData} />}
      <div className={`relative ${className}`}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
        )}
        
        {error ? (
          <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
            <div className="text-center p-4">
              <svg 
                className="mx-auto h-12 w-12 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <p className="mt-2 text-sm text-gray-500">
                {lang === 'el' ? 'Εικόνα μη διαθέσιμη' : 'Image not available'}
              </p>
            </div>
          </div>
        ) : (
          <Image
            {...props}
            alt={alt}
            title={imageTitle}
            className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
            onError={handleError}
            onLoad={handleLoad}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
    </>
  )
}
