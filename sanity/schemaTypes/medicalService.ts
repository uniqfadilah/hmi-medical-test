import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'medicalService',
  title: 'Medical specialties',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      description: 'Icon image for the medical service',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
        },
      ],
      validation: (Rule) => Rule.required().error('Icon image is required'),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'Thumbnail image for the medical service',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
        },
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100).error('Title is required and must be less than 100 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(200)
          .error('Description is required and must be less than 200 characters'),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this service appears (lower numbers appear first)',
      validation: (Rule) => Rule.min(0).integer(),
    }),
  defineField({
      name: 'isFeatured',
      title: 'Featured ',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
      description: 'description',
    },
    prepare({ title, icon, description }) {
      return {
        title: title || 'Untitled Medical Service',
        subtitle: description ? description.substring(0, 50) + '...' : 'No description',
        media: icon,
      }
    },
  },
  orderings: [
    {
      title: 'Order (Low to High)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Order (High to Low)',
      name: 'orderDesc',
      by: [{ field: 'order', direction: 'desc' }],
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
