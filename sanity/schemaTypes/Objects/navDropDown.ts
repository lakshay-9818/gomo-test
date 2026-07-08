import { defineField, defineType } from 'sanity';

export const navDropdownType = defineType({
  name: 'navDropdown',
  title: 'Dropdown Menu',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Dropdown Label', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'links',
      title: 'Sub Links',
      type: 'array',
      of: [{ type: 'navLink' }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});