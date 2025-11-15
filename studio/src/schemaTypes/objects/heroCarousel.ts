import {defineField, defineType} from 'sanity'

export const heroCarousel = defineType({
  name: 'heroCarousel',
  title: 'Hero Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Background Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Unsere Leistungen',
            }),
            defineField({
              name: 'buttonLink',
              title: 'Button Link',
              type: 'string',
              initialValue: '#leistungen',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
              media: 'image',
            },
          },
        },
      ],
      initialValue: [
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
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      slides: 'slides',
    },
    prepare({slides}) {
      return {
        title: 'Hero Carousel',
        subtitle: `${slides?.length || 0} slide${slides?.length !== 1 ? 's' : ''}`,
      }
    },
  },
})
