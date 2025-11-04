'use client'

import {useEffect, useCallback, useState} from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface GalleryItem {
  id: string
  title: string
  image: string
  description?: string
}

// TODO: Replace placeholder images with real project photos
// Place your images in /public/images/placeholders/ as gallery-1.jpg, gallery-2.jpg, etc.
const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Laserreinigung von Metalloberflächen',
    image: '/images/placeholders/gallery-1.jpg',
    description: 'Präzise und schonende Reinigung',
  },
  {
    id: '2',
    title: 'Trockeneisreinigung im Industriebereich',
    image: '/images/placeholders/gallery-2.jpg',
    description: 'Effektiv und umweltfreundlich',
  },
  {
    id: '3',
    title: 'Sandstrahlen von Fassaden',
    image: '/images/placeholders/gallery-3.jpg',
    description: 'Gründliche Oberflächenbehandlung',
  },
  {
    id: '4',
    title: 'Restaurierung historischer Gebäude',
    image: '/images/placeholders/gallery-4.jpg',
    description: 'Bewahrung kulturellen Erbes',
  },
  {
    id: '5',
    title: 'Industrielle Maschinenreinigung',
    image: '/images/placeholders/gallery-5.jpg',
    description: 'Professionelle Wartung',
  },
]

export default function GalleryCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Unsere Projekte</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Entdecken Sie unsere erfolgreich abgeschlossenen Projekte und lassen Sie sich von der
          Qualität unserer Arbeit überzeugen
        </p>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            {/* Mobile Navigation - Above carousel */}
            <div className="flex justify-center gap-4 mb-6 md:hidden">
              <CarouselPrevious className="static translate-y-0 bg-gray-950 border-gray-800 hover:bg-yellow-500 hover:border-yellow-500 text-white" />
              <CarouselNext className="static translate-y-0 bg-gray-950 border-gray-800 hover:bg-yellow-500 hover:border-yellow-500 text-white" />
            </div>

            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg bg-gray-950 border border-gray-800 hover:border-yellow-500 transition-all duration-300">
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src="https://placehold.co/600x400/png?text=Wir bereiten uns vor"
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-gray-300 text-sm line-clamp-1">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Desktop Navigation - Side arrows */}
            <div className="hidden md:block">
              <CarouselPrevious className="bg-gray-950 cursor-pointer border-gray-800 hover:bg-yellow-500 hover:border-yellow-500 text-white -left-12" />
              <CarouselNext className="bg-gray-950 cursor-pointer border-gray-800 hover:bg-yellow-500 hover:border-yellow-500 text-white -right-12" />
            </div>
          </Carousel>

          {/* Dot Indicators - Always visible */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({length: count}).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === current ? 'w-8 bg-yellow-400' : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
