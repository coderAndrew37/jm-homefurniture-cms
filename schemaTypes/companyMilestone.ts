import {defineType} from 'sanity'

export const companyMilestone = defineType({
  name: 'companyMilestone',
  title: 'Company Milestone',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'event',
      title: 'Event Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
})
