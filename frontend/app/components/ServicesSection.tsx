import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import {urlForImage} from '@/sanity/lib/utils'
import ResolvedLink from './ResolvedLink'
import {ChevronRight} from 'lucide-react'
import {Button} from '@/components/ui/button'

interface Service {
  _key?: string
  title: string
  image?: any
  description?: any[]
  advantages?: string
  showMoreButton?: {
    link: {
      _type: string
      href?: string
    }
    text?: string
  }
}

interface CleaningExamples {
  heading?: string
  examples?: string
}

interface ServicesSectionProps {
  block?: {
    heading?: string
    services?: Service[]
    cleaningExamples?: CleaningExamples
  }
}

const defaultCleaningExamples: CleaningExamples = {
  heading: 'Wir reinigen zum Beispiel:',
  examples:
    'Metalloberflächen · Aluminium · Edelstahl · Holz · Stein · Beton · Fassaden · Maschinen und Anlagen · Werkzeuge · Formen · Karosserien · Oldtimer · Felgen · Motoren · Getriebe · Produktionsanlagen · Lackierte Teile · Graffiti · Brandschäden · Denkmäler · Skulpturen · Zäune · Tore · Bodenplatten',
}

export default function ServicesSection({block}: ServicesSectionProps = {}) {
  const heading = block?.heading || 'Unsere Leistungen'
  const cleaningExamples = block?.cleaningExamples || defaultCleaningExamples

  console.log('ttt service', block?.services?.[0])

  return (
    <section id="leistungen" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">{heading}</h2>

        {/* Services with alternating layout */}
        <div className="space-y-16 mb-16">
          {block?.services?.map((service, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={service._key || index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                {service.image && (
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-800">
                      <Image
                        src={urlForImage(service.image)?.width(800).height(600).url() || ''}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <div className="p-8 rounded-lg h-full">
                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                    {service.description && (
                      <div className="text-gray-300 mb-4 prose prose-invert max-w-none">
                        <PortableText value={service.description} />
                      </div>
                    )}
                    {service.advantages && (
                      <p className="text-sm text-primary font-semibold mb-6">
                        {service.advantages}
                      </p>
                    )}
                    {service.showMoreButton && (
                      <ResolvedLink link={service.showMoreButton.link}>
                        <Button>
                          {service.showMoreButton.text}
                          <ChevronRight size={16} />
                        </Button>
                      </ResolvedLink>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* What We Clean */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            {cleaningExamples.heading}
          </h3>
          <div className="text-center text-gray-300 leading-relaxed">
            <p className="text-lg">{cleaningExamples.examples}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
