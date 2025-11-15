import {defineField, defineType} from 'sanity'

export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Unsere Leistungen',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{type: 'block'}],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'advantages',
              title: 'Advantages',
              type: 'string',
              description: 'Short text highlighting key advantages',
            }),
            defineField({
              name: 'iconColor',
              title: 'Icon Color',
              type: 'string',
              options: {
                list: [
                  {title: 'Yellow 300', value: 'bg-yellow-300'},
                  {title: 'Yellow 400', value: 'bg-yellow-400'},
                  {title: 'Yellow 500', value: 'bg-yellow-500'},
                ],
              },
              initialValue: 'bg-yellow-400',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      initialValue: [
        {
          title: 'Laserreinigung',
          iconColor: 'bg-yellow-300',
          advantages:
            'Vorteile: kein Abrieb, keine Rückstände, automatisierbar, geringer Wartungsaufwand.',
        },
        {
          title: 'Trockeneisreinigung',
          iconColor: 'bg-yellow-400',
          advantages:
            'Vorteile: chemiefrei, kein Wasser, keine Rückstände, hohe Reinigungsleistung.',
        },
        {
          title: 'Sandstrahlen',
          iconColor: 'bg-yellow-500',
          advantages:
            'Vorteile: hohe Reinigungsleistung, vielseitig, materialschonend, optimal für Beschichtungen.',
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'cleaningExamples',
      title: 'What We Clean',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Wir reinigen zum Beispiel:',
        }),
        defineField({
          name: 'examples',
          title: 'Examples List',
          type: 'text',
          rows: 5,
          initialValue:
            'Metalloberflächen · Aluminium · Edelstahl · Holz · Stein · Beton · Fassaden · Maschinen und Anlagen · Werkzeuge · Formen · Karosserien · Oldtimer · Felgen · Motoren · Getriebe · Produktionsanlagen · Lackierte Teile · Graffiti · Brandschäden · Denkmäler · Skulpturen · Zäune · Tore · Bodenplatten',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      services: 'services',
    },
    prepare({heading, services}) {
      return {
        title: heading || 'Services Section',
        subtitle: `${services?.length || 0} service${services?.length !== 1 ? 's' : ''}`,
      }
    },
  },
})
