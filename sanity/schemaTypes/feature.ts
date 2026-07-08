import { defineField, defineType } from 'sanity';

export const featureItem = defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Feature Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconImage',
      title: 'Feature Icon / Graphic',
      type: 'image',
      description: 'Upload an SVG or PNG graphic for this feature.',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Feature Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
});