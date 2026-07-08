import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'intro', title: 'Intro & Stats' },
    { name: 'brandsServed', title: 'Brands Served' },
    // { name: 'categories', title: 'Categories' },
    // { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Big Heading (e.g. "Brand")' }),
        defineField({ name: 'subheading', type: 'string', title: 'Subheading (e.g. "Tagline")' }),
        defineField({ name: 'cta', type: 'string', title: 'CTA' }),
        defineField({ name: 'ctaHref', type: 'string', title: 'CTA Link' }),
        defineField({ name: 'image', type: 'image', title: 'Hero Background Image', options: { hotspot: true } }),
      ],
    }),
     defineField({
      name: 'intro',
      title: 'Intro Section',
      type: 'object',
      group: 'intro',
         fields: [
             defineField({ name: 'introHeading', title: 'Intro Heading', type: 'string' }),
             defineField({
                 name: 'introParagraphs',
                 title: 'Intro Paragraphs',
                 type: 'array',
                 of: [
                     defineArrayMember({
                         type: 'string',
                         title: 'Paragraph',
                     }),
                 ],
             }),
             defineField({ name: 'introImage', type: 'image', title: 'Intro Background Image', options: { hotspot: true } }),
             defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({ name: 'value', type: 'string', title: 'Value (e.g. "50+")' }),
            defineField({ name: 'label', type: 'string', title: 'Label (e.g. "Bakery Equipment")' }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        }),
      ],
    }),
         ],
    }),
    defineField({
      name: 'brandsServed',
      title: 'Brands Served',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'brand',
          fields: [
            defineField({ name: 'name', type: 'string', title: 'Brand Name' }),
            defineField({ name: 'logo', type: 'image', title: 'Brand Logo', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'name', media: 'logo' } },
        }),
      ],
    }),
]

//     defineField({
//       name: 'stats',
//       title: 'Stats',
//       type: 'array',
//       group: 'intro',
//       of: [
//         defineArrayMember({
//           type: 'object',
//           name: 'stat',
//           fields: [
//             defineField({ name: 'value', type: 'string', title: 'Value (e.g. "50+")' }),
//             defineField({ name: 'label', type: 'string', title: 'Label (e.g. "Bakery Equipment")' }),
//           ],
//           preview: { select: { title: 'value', subtitle: 'label' } },
//         }),
//       ],
//     }),
//     defineField({
//       name: 'clientLogos',
//       title: 'Client Logos',
//       type: 'array',
//       group: 'intro',
//       of: [
//         defineArrayMember({
//           type: 'object',
//           name: 'clientLogo',
//           fields: [defineField({ name: 'name', type: 'string', title: 'Client Name' })],
//           preview: { select: { title: 'name' } },
//         }),
//       ],
//     }),
//     defineField({
//       name: 'servicesIntro',
//       title: 'Services Intro',
//       type: 'object',
//       group: 'categories',
//       fields: [
//         defineField({ name: 'heading', type: 'text', rows: 2, title: 'Heading' }),
//         defineField({ name: 'description', type: 'text', rows: 2, title: 'Description' }),
//       ],
//     }),
//     defineField({
//       name: 'categories',
//       title: 'Category Cards',
//       type: 'array',
//       group: 'categories',
//       of: [
//         defineArrayMember({
//           type: 'object',
//           name: 'categoryCard',
//           fields: [
//             defineField({ name: 'name', type: 'string', title: 'Name' }),
//             defineField({ name: 'image', type: 'image', title: 'Image', options: { hotspot: true } }),
//           ],
//           preview: { select: { title: 'name', media: 'image' } },
//         }),
//       ],
//     }),
//     defineField({
//       name: 'features',
//       title: 'Features / Services',
//       type: 'array',
//       group: 'social',
//       of: [
//         defineArrayMember({
//           type: 'object',
//           name: 'feature',
//           fields: [
//             defineField({ name: 'title', type: 'string', title: 'Title' }),
//             defineField({ name: 'description', type: 'text', rows: 2, title: 'Description' }),
//             defineField({ name: 'icon', type: 'string', title: 'Icon name (lucide-react)' }),
//           ],
//           preview: { select: { title: 'title', subtitle: 'description' } },
//         }),
//       ],
//     }),
//     defineField({
//       name: 'testimonials',
//       title: 'Testimonials',
//       type: 'array',
//       group: 'social',
//       of: [
//         defineArrayMember({
//           type: 'object',
//           name: 'testimonial',
//           fields: [
//             defineField({ name: 'quote', type: 'text', rows: 3, title: 'Quote' }),
//             defineField({ name: 'authorName', type: 'string', title: 'Author Name' }),
//             defineField({ name: 'authorRole', type: 'string', title: 'Author Role / Company' }),
//             defineField({ name: 'authorLogo', type: 'image', title: 'Client Logo' }),
//           ],
//           preview: { select: { title: 'authorName', subtitle: 'quote' } },
//         }),
//       ],
//     }),
//     defineField({
//       name: 'ctaBanner',
//       title: 'CTA Banner',
//       type: 'object',
//       group: 'social',
//       fields: [
//         defineField({ name: 'heading', type: 'text', rows: 2, title: 'Heading' }),
//         defineField({ name: 'ctaLabel', type: 'string', title: 'CTA Label' }),
//         defineField({ name: 'ctaHref', type: 'string', title: 'CTA Link' }),
//       ],
//     }),
//     defineField({ name: 'seo', title: 'SEO', type: 'seo', group: 'seo' }),
//   ],
//   preview: {
//     prepare() {
//       return { title: 'Homepage' }
//     },
//   },
})
