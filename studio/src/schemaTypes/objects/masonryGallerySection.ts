import {defineField, defineType} from 'sanity'

export const masonryGallerySection = defineType({
  name: 'masonryGallerySection',
  title: 'Masonry Gallery Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Unsere Galerie',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Small text above the heading',
      initialValue: 'Projekte',
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Important for SEO and accessibility',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption displayed below the image',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'imagesPerLoad',
      title: 'Images Per Load',
      type: 'number',
      description: 'Number of images to show initially and load with each "Load More" click',
      initialValue: 9,
      validation: (Rule) => Rule.required().min(3).max(50),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
      images: 'images',
    },
    prepare({title, subtitle, images}) {
      return {
        title: title || 'Masonry Gallery Section',
        subtitle: `${images?.length || 0} images${subtitle ? ` · ${subtitle}` : ''}`,
        media: images?.[0],
      }
    },
  },
})
