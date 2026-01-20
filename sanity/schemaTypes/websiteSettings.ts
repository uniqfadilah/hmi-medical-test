import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'websiteSettings',
  title: 'Website Settings',
  type: 'document',
  // Singleton pattern - only one document should exist
  // When creating the document, set the document ID to "websiteSettings"
  fields: [

    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Main address',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Phone number',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'WhatsApp number or link',
    }),
    defineField({
      name: 'email_feedback',
      title: 'Email Feedback',
      type: 'string',
      description: 'Email address for feedback',
    }),
    defineField({
      name: 'email_general',
      title: 'Email General',
      type: 'string',
      description: 'General email address',
    }),
    defineField({
      name: 'satellite_address',
      title: 'Satellite Address',
      type: 'string',
      description: 'Satellite office address',
    }),
    defineField({
      name: 'email_corporate',
      title: 'Email Corporate',
      type: 'string',
      description: 'Corporate email address',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Main email address',
    }),
    defineField({
      name: 'maps_src',
      title: 'Maps Source',
      type: 'string',
      description: 'Google Maps embed source URL',
    }),
    defineField({
      name: 'banner',
      title: 'Banner',
      type: 'image',
      description: 'Website banner image',
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
      address: 'address',
    },
    prepare({ address }) {
      return {
        title: 'Website Settings',
        subtitle: address || 'Website configuration',
      }
    },
  },
})
