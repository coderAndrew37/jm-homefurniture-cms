import {defineType, defineField} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'additionalImages',
      title: 'Additional Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'discountPercentage',
      title: 'Discount (%)',
      type: 'number',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'collection'}]}],
    }),
    defineField({
      name: 'availableColors',
      title: 'Available Colors',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions (cm)',
      type: 'object',
      fields: [
        defineField({name: 'width', title: 'Width', type: 'string'}),
        defineField({name: 'height', title: 'Height', type: 'string'}),
        defineField({name: 'depth', title: 'Depth', type: 'string'}),
      ],
    }),
    defineField({
      name: 'weight',
      title: 'Weight',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Average Rating',
      type: 'object',
      fields: [
        defineField({
          name: 'stars',
          title: 'Stars',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(5),
        }),
        defineField({
          name: 'count',
          title: 'Total Reviews',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
    }),
    defineField({
      name: 'isBrandNew',
      title: 'Is Brand New?',
      type: 'boolean',
    }),
    defineField({
      name: 'assemblyRequired',
      title: 'Assembly Required?',
      type: 'boolean',
    }),
    defineField({
      name: 'warranty',
      title: 'Warranty',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Draft', value: 'draft'},
          {title: 'Archived', value: 'archived'},
        ],
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({name: 'metaTitle', title: 'Meta Title', type: 'string'}),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
        }),
        defineField({name: 'keywords', title: 'Keywords', type: 'array', of: [{type: 'string'}]}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
      subtitle: 'category.name',
    },
  },
})
