import { defineField, defineType } from 'sanity';

export const solutionCategory = defineType({
  name: 'solutionCategory',
  title: 'Solution Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'e.g., Offices & Workplaces, Hotels, Restaurants',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'Unique ID / Slug',
      type: 'slug',
      description: 'Used for frontend routing or keys.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true, // Enables UI positioning selectors
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags / Badges',
      type: 'array',
      description: 'Add short highlights (e.g., Workplace analysis, Interior design)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', // Renders nice tags in the Sanity Studio UI
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'The body text that appears over the blurred banner background.',
      validation: (Rule) => Rule.max(200),
    }),
  ],
});