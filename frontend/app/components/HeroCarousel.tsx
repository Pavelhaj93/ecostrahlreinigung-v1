'use client'

import * as React from 'react'
import {Button} from '@/components/ui/button'
import {urlForImage} from '@/sanity/lib/utils'

interface Slide {
  _key?: string
  image?: any
  title: string
  subtitle: string
  description: string
  buttonText?: string
  buttonLink?: string
}

interface HeroCarouselProps {
  block?: {
    slides?: Slide[]
  }
}

const defaultSlides: Slide[] = [
  {
    title: 'Professionelle Trockeneisreinigung',
    subtitle: 'Umweltfreundlich · Effizient · Präzise',
    description: 'Mobile Reinigungslösungen für Industrie und Gewerbe in ganz Bayern',
    buttonText: 'Unsere Leistungen',
    buttonLink: '#leistungen',
  },
  {
    title: 'Innovative Laserreinigung',
    subtitle: 'Kontaktfrei · Schonend · Automatisierbar',
    description: 'Höchste Präzision für empfindliche Bauteile und Oberflächen',
    buttonText: 'Unsere Leistungen',
    buttonLink: '#leistungen',
  },
  {
    title: 'Leistungsstarkes Sandstrahlen',
    subtitle: 'Gründlich · Flexibel · Materialschonend',
    description: 'Optimale Oberflächenvorbereitung für perfekte Beschichtungen',
    buttonText: 'Unsere Leistungen',
    buttonLink: '#leistungen',
  },
]

export default function HeroCarousel({block}: HeroCarouselProps = {}) {
  const slides = block?.slides && block.slides.length > 0 ? block.slides : defaultSlides
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const slide = slides[currentSlide]

  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[600px] w-full overflow-hidden">
        {/* Background Image with Gradient Fallback and Transition */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: slide.image
              ? `url(${urlForImage(slide.image)?.width(1920).height(600).url()})`
              : 'linear-gradient(to right, #1a1a1a, #2d2d2d)',
            backgroundBlendMode: 'overlay',
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="mb-4 text-2xl font-semibold text-primary transition-opacity duration-500">
                {slide.subtitle}
              </h2>
              <h1 className="mb-6 text-5xl font-bold text-white transition-opacity duration-500 md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>
              <p className="mb-8 text-xl text-gray-300 transition-opacity duration-500 md:text-2xl">
                {slide.description}
              </p>
              {slide.buttonText && (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold"
                >
                  <a href={slide.buttonLink || '#leistungen'}>{slide.buttonText}</a>
                </Button>
              )}
            </div>
          </div>
        </div>{' '}
        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-yellow-400' : 'w-2 bg-white hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
