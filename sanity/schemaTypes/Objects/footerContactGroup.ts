import { defineField, defineType } from 'sanity';

export const footerContactGroupType = defineType({
  name: 'footerContactGroup',
  title: 'Contact Group',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Column Title', type: 'string', initialValue: 'Contact' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'visitingAddress', title: 'Visiting Address Block', type: 'text', rows: 2 }),
    defineField({ name: 'postalAddress', title: 'Postal Address Block', type: 'text', rows: 2 }),
  ],
});