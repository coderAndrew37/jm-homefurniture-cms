import {defineType} from 'sanity'

export const companyValue = defineType({
  name: 'companyValue',
  title: 'Company Value',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Value Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Emoji Icon',
      type: 'string',
      description: 'Example: 🌱 🔨 🤝 💝',
    },
  ],
})
