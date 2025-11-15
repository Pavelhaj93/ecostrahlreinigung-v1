import {PortableText} from '@portabletext/react'

interface Service {
  _key?: string
  title: string
  description?: any[]
  advantages?: string
  iconColor?: string
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

  // Debug logging
  if (block?.services) {
    console.log('Services from Sanity:', block.services)
  }

  return (
    <section id="leistungen" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">{heading}</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {block?.services?.map((service, index) => (
            <div
              key={service._key || index}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary transition-colors"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              </div>
              {service.description && (
                <div className="text-gray-300 mb-4 prose prose-invert max-w-none">
                  <PortableText value={service.description} />
                </div>
              )}
              {service.advantages && (
                <p className="text-sm text-primary font-semibold">{service.advantages}</p>
              )}
            </div>
          ))}
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
