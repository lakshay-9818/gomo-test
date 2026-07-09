import { defineField, defineType } from 'sanity';

export const insightType = defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The headline for the project card.',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique URL path generated from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The background asset showcased inside the card carousel layout.',
      options: {
        hotspot: true, // Allows focus targeting inside fluid component crops
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
  name: 'classifi',
  title: 'Insight Type',
  type: 'string',
  description: 'Classify what kind of insight this document is.',
  options: {
    list: [
      { title: 'News', value: 'news' },
      { title: 'Article', value: 'article' },
      { title: 'Press Release', value: 'press-release' },
    ],
    layout: 'radio',
  },
  validation: (Rule) => Rule.required(),
}),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'Select the showcase date displayed at the bottom of the card block.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});