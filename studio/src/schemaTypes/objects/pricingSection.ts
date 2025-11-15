import {defineField, defineType} from 'sanity'

export const pricingSection = defineType({
  name: 'pricingSection',
  title: 'Pricing Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Preisübersicht',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pricingCards',
      title: 'Pricing Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'serviceName',
              title: 'Service Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'e.g., "ab 120 €"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'priceUnit',
              title: 'Price Unit',
              type: 'string',
              initialValue: 'pro Stunde',
            }),
            defineField({
              name: 'priceColor',
              title: 'Price Color',
              type: 'string',
              options: {
                list: [
                  {title: 'Yellow 300', value: 'text-yellow-300'},
                  {title: 'Yellow 400', value: 'text-yellow-400'},
                  {title: 'Yellow 500', value: 'text-yellow-500'},
                ],
              },
              initialValue: 'text-yellow-400',
            }),
          ],
          preview: {
            select: {
              title: 'serviceName',
              subtitle: 'price',
            },
          },
        },
      ],
      initialValue: [
        {
          serviceName: 'Laserreinigung',
          price: 'ab 120 €',
          priceUnit: 'pro Stunde',
          priceColor: 'text-yellow-300',
        },
        {
          serviceName: 'Trockeneisreinigung',
          price: 'ab 115 €',
          priceUnit: 'pro Stunde',
          priceColor: 'text-yellow-400',
        },
        {
          serviceName: 'Sandstrahlen',
          price: 'ab 90 €',
          priceUnit: 'pro Stunde',
          priceColor: 'text-yellow-500',
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      cards: 'pricingCards',
    },
    prepare({heading, cards}) {
      return {
        title: heading || 'Pricing Section',
        subtitle: `${cards?.length || 0} pricing card${cards?.length !== 1 ? 's' : ''}`,
      }
    },
  },
})
