import {defineField, defineType} from 'sanity'

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Kontakt',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      initialValue: 'Kontaktieren Sie uns',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue: 'Per E-Mail, Kontaktformular oder telefonisch. Wir beraten Sie gerne.',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'address',
          title: 'Address',
          type: 'string',
          initialValue: '93489 Schorndorf, Riedäcker 19',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'info@ecostrahlreinigung.de',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
          initialValue: '+49 (0) 123 456 789',
        }),
      ],
    }),
    defineField({
      name: 'showForm',
      title: 'Show Contact Form',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show/hide the contact form',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: heading || 'Contact Section',
      }
    },
  },
})
