import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import {urlForImage} from '@/sanity/lib/utils'

interface ServiceIntroSectionProps {
  block?: {
    heading?: string
    subheading?: string
    description?: any[]
    image?: any
    priceLabel?: string
    priceValue?: string
    priceDetails?: string
    features?: Array<{
      _key: string
      text: string
    }>
  }
}

export default function ServiceIntroSection({block}: ServiceIntroSectionProps = {}) {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          {block?.image && (
            <div className="order-2 lg:order-1 lg:sticky lg:top-24">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
                <Image
                  src={urlForImage(block.image)?.width(800).height(600).url() || ''}
                  alt={block.heading || 'Service'}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {block?.subheading && (
                <p className="text-primary uppercase text-sm font-semibold tracking-wider">
                  {block.subheading}
                </p>
              )}

              {block?.heading && (
                <h2 className="text-3xl lg:text-4xl font-bold text-white">{block.heading}</h2>
              )}

              {block?.description && (
                <div className="text-gray-300 prose prose-invert max-w-none leading-relaxed">
                  <PortableText value={block.description} />
                </div>
              )}

              {/* Features List */}
              {block?.features && block.features.length > 0 && (
                <ul className="space-y-3">
                  {block.features.map((feature) => (
                    <li key={feature._key} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Pricing Card */}
              {(block?.priceLabel || block?.priceValue) && (
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 mt-8">
                  <div className="flex items-baseline gap-3">
                    {block.priceLabel && (
                      <span className="text-gray-400 text-sm uppercase tracking-wide">
                        {block.priceLabel}
                      </span>
                    )}
                    {block.priceValue && (
                      <span className="text-3xl font-bold text-primary">{block.priceValue}</span>
                    )}
                  </div>
                  {block.priceDetails && (
                    <p className="text-gray-400 text-sm mt-2">{block.priceDetails}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
