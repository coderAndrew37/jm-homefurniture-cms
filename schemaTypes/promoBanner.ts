import {defineType, defineField} from 'sanity'

export const promoBanner = defineType({
  name: 'promoBanner',
  title: 'Promo Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Promo Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'discountText',
      title: 'Discount Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Promo Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'active',
      title: 'Active?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'validUntil',
      title: 'Valid Until',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {title: 'title', media: 'image', subtitle: 'discountText'},
  },
})
