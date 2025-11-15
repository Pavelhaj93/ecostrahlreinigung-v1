import {defineField, defineType} from 'sanity'

export const galleryCarousel = defineType({
  name: 'galleryCarousel',
  title: 'Gallery Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Unsere Projekte',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
      initialValue:
        'Entdecken Sie unsere erfolgreich abgeschlossenen Projekte und lassen Sie sich von der Qualität unserer Arbeit überzeugen',
    }),
    defineField({
      name: 'galleryItems',
      title: 'Gallery Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Project Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Project Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Short Description',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
            },
          },
        },
      ],
      initialValue: [
        {
          title: 'Laserreinigung von Metalloberflächen',
          description: 'Präzise und schonende Reinigung',
        },
        {
          title: 'Trockeneisreinigung im Industriebereich',
          description: 'Effektiv und umweltfreundlich',
        },
        {
          title: 'Sandstrahlen von Fassaden',
          description: 'Gründliche Oberflächenbehandlung',
        },
        {
          title: 'Restaurierung historischer Gebäude',
          description: 'Bewahrung kulturellen Erbes',
        },
        {
          title: 'Industrielle Maschinenreinigung',
          description: 'Professionelle Wartung',
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      items: 'galleryItems',
    },
    prepare({heading, items}) {
      return {
        title: heading || 'Gallery Carousel',
        subtitle: `${items?.length || 0} project${items?.length !== 1 ? 's' : ''}`,
      }
    },
  },
})
