import { defineField, defineType } from 'sanity';

export const footerSettingsType = defineType({
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'bigLogoText',
      title: 'Giant Brand Text',
      type: 'string',
      description: 'The large display word tracking at the top of the footer background container (e.g., Brand).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'businessAreas',
      title: 'Business Areas Column',
      type: 'footerLinkGroup',
    }),
    defineField({
      name: 'quickLinks',
      title: 'Quick Links Column',
      type: 'footerLinkGroup',
    }),
    defineField({
      name: 'resources',
      title: 'Resources Column',
      type: 'footerLinkGroup',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Details Column',
      type: 'footerContactGroup',
    }),
    defineField({
      name: 'newsletterHeading',
      title: 'Newsletter Heading',
      type: 'string',
      initialValue: 'Get trends tips, trends & inspiration delivered to your inbox',
    }),
  ],
});