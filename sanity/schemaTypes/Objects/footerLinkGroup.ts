import { defineField, defineType } from 'sanity';

export const footerLinkGroupType = defineType({
  name: 'footerLinkGroup',
  title: 'Link Column Group',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Column Heading Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      title: 'Links Collection',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Link Label', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'href', title: 'URL Target Path', type: 'string', validation: (Rule) => Rule.required() },
          ],
        },
      ],
    }),
  ],
});