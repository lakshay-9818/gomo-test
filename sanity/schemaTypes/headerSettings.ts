import { defineField, defineType } from 'sanity';

export const headerSettingsType = defineType({
  name: 'headerSettings',
  title: 'Header Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      initialValue: 'Logo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      description: 'Order and structure your primary navigation bar links.',
      of: [
        { type: 'navLink' },
        { type: 'navDropdown' }
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Contact us',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '/products#contact',
      validation: (Rule) => Rule.required(),
    }),
  ],
});