import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'specialtyCare',
  title: 'Specialty Care',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      description: 'Rich text description (WYSIWYG)',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'Thumbnail image for the specialty care',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      thumbnail: 'thumbnail',
    },
    prepare({ title, thumbnail }) {
      return {
        title: title || 'Untitled Specialty Care',
        
        media: thumbnail,
      }
    },
  },
})
