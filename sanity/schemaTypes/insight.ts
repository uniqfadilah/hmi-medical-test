import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
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
      description: 'Optional description for the insight',
      validation: (Rule) => Rule.max(500).error('Description must be less than 500 characters'),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'Thumbnail image for the insight',
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
      validation: (Rule) => Rule.required().error('Thumbnail image is required'),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this insight appears (lower numbers appear first)',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured (Wide Layout)',
      type: 'boolean',
      description: 'If enabled, this insight will span 3 columns instead of 1 (for the first card)',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      thumbnail: 'thumbnail',
      description: 'description',
      isFeatured: 'isFeatured',
    },
    prepare({ title, thumbnail, description, isFeatured }) {
      return {
        title: title || 'Untitled Insight',
        subtitle: `${isFeatured ? '⭐ Featured • ' : ''}${description ? description.substring(0, 50) + '...' : 'No description'}`,
        media: thumbnail,
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
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [{ field: 'isFeatured', direction: 'desc' }],
    },
  ],
})
