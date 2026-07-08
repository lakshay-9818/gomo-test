import { groq } from 'next-sanity'

export const homepageQuery = groq`
*[_type == "homepage"][0]{
  hero{ heading,subheading, cta, ctaHref, image },
  intro{ introHeading, introParagraphs, introImage, stats[]{ _key, value, label } },
  brandsServed[]{ _key, name, logo },
}`

export const solutionCategoriesQuery = `*[_type == "solutionCategory"]{ _id, name, id, image, tags, description }`;
// export const homepageQuery = groq`
// *[_type == "homepage"][0]{
//   hero{ heading, ctaLabel, ctaHref, image },
//   introHeading,
//   introText,
//   stats[]{ _key, value, label },
//   clientLogos[]{ _key, name },
//   servicesIntro{ heading, description },
//   categories[]{ _key, name, image },
//   features[]{ _key, title, description, icon },
//   testimonials[]{ _key, quote, authorName, authorRole, authorLogo },
//   ctaBanner{ heading, ctaLabel, ctaHref },
//   seo{ title, description, ogImage }
// }`