import { defineField, defineType } from 'sanity';

export const navLinkType = defineType({
  name: 'navLink',
  title: 'Single Link',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Link Label', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'href', title: 'URL Path', type: 'string', validation: (Rule) => Rule.required() }),
  ],
});