import {defineField, defineType} from 'sanity'

export const serviceIntroSection = defineType({
  name: 'serviceIntroSection',
  title: 'Service Intro Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Professionelle Sandstrahlen',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Small text above the heading (e.g., "Professionelle Reinigung")',
      initialValue: 'Oberflächenbehandlung',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'features',
      title: 'Features',
      type: 'array',
      description: 'List of key features or benefits',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Feature Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'text',
            },
          },
        },
      ],
      initialValue: [
        {text: 'Hohe Reinigungsleistung für hartnäckige Verschmutzungen'},
        {text: 'Vielseitig einsetzbar auf verschiedenen Materialien'},
        {text: 'Materialschonend und präzise'},
        {text: 'Optimal für Beschichtungsvorbereitungen'},
        {text: 'Professionelle Ausrüstung und erfahrene Techniker'},
      ],
    }),
    defineField({
      name: 'priceLabel',
      title: 'Price Label',
      type: 'string',
      description: 'e.g., "Ab" or "Preis ab"',
      placeholder: 'Ab',
      initialValue: 'Ab',
    }),
    defineField({
      name: 'priceValue',
      title: 'Price Value',
      type: 'string',
      description: 'e.g., "150€ / Stunde"',
      placeholder: '150€ / Stunde',
      initialValue: '120€ / Stunde',
    }),
    defineField({
      name: 'priceDetails',
      title: 'Price Details',
      type: 'text',
      rows: 2,
      description: 'Additional pricing information',
      placeholder: 'Preise variieren je nach Projekt und Aufwand',
      initialValue:
        'Preise variieren je nach Projekt, Material und Aufwand. Kontaktieren Sie uns für ein individuelles Angebot.',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Service Intro Section',
        subtitle: subtitle || 'Service introduction with image and pricing',
        media,
      }
    },
  },
})
