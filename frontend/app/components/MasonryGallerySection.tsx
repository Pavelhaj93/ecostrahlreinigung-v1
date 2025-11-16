'use client'

import {useState, useEffect} from 'react'
import Image from 'next/image'
import {urlForImage} from '@/sanity/lib/utils'

interface GalleryImage {
  _key: string
  asset: any
  alt?: string
  caption?: string
}

interface MasonryGallerySectionProps {
  block?: {
    heading?: string
    subheading?: string
    images?: GalleryImage[]
    imagesPerLoad?: number
  }
}

export default function MasonryGallerySection({block}: MasonryGallerySectionProps = {}) {
  const imagesPerLoad = block?.imagesPerLoad || 9
  const [visibleCount, setVisibleCount] = useState(imagesPerLoad)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = block?.images || []
  const visibleImages = images.slice(0, visibleCount)
  const hasMore = visibleCount < images.length

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + imagesPerLoad, images.length))
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    if (direction === 'prev') {
      setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1))
    } else {
      setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0))
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev')
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          {block?.subheading && (
            <p className="text-primary uppercase text-sm font-semibold tracking-wider mb-2">
              {block.subheading}
            </p>
          )}
          {block?.heading && (
            <h2 className="text-3xl lg:text-4xl font-bold text-white">{block.heading}</h2>
          )}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {visibleImages.map((image, index) => (
            <div
              key={image._key}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg border border-gray-800 hover:border-primary transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <Image
                  src={urlForImage(image)?.width(600).url() || ''}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
              {image.caption && (
                <div className="p-3 bg-gray-900">
                  <p className="text-sm text-gray-300">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 bg-primary text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
            >
              Mehr laden
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={closeLightbox}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 text-white hover:text-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('prev')
              }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="max-w-5xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={urlForImage(images[selectedImage])?.width(1200).url() || ''}
                alt={images[selectedImage].alt || `Gallery image ${selectedImage + 1}`}
                width={1200}
                height={800}
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              />
              {images[selectedImage].caption && (
                <p className="text-center text-white mt-4">{images[selectedImage].caption}</p>
              )}
            </div>

            {/* Next Button */}
            <button
              className="absolute right-4 text-white hover:text-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('next')
              }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
