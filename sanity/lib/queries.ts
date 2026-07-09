import { groq } from 'next-sanity'

export const homepageQuery = groq`
*[_type == "homepage"][0]{
  hero{ heading,subheading, cta, ctaHref, image },
  intro{ introHeading, introParagraphs, introImage, stats[]{ _key, value, label } },
  brandsServed[]{ _key, name, logo },
}`

export const solutionCategoriesQuery = `*[_type == "solutionCategory"]{ _id, name, id, image, tags, description }`;

export const featureItemsQuery = `*[_type == "featureItem"]{ _id, title, description, iconImage }`;

export const getAllFeatureItemsQuery = `*[_type == "featureItem"]{ _id, title, description, iconImage }`

export const getAllInsightsQuery =
`*[_type == "insight"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current, // <-- CRITICAL: This extracts the string out of the object
  classifi,
  coverImage,
  publishedAt
}`;
export const getLayoutDataQuery = `{
    "header": *[_type == "headerSettings"][0]{
      logoText,
      navItems[],
      ctaText,
      ctaLink
    },
    "footer": *[_type == "footerSettings"][0]{
      bigLogoText,
      businessAreas{ title, links[] },
      quickLinks{ title, links[] },
      resources{ title, links[] },
      contactInfo{ title, phone, email, visitingAddress, postalAddress },
      newsletterHeading
    }
  }`;

  export const allProductsQuery = groq`
*[_type == "product"] | order(name asc){
  _id,
  name,
  "slug": slug.current,
  shortDescription,
  mainImage,
  category,
}`

export const productBySlugQuery = groq`
*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  shortDescription,
  description,
  mainImage,
  gallery,
  category,
  seo,
}`

export const relatedProductsQuery = groq`
*[_type == "product" && category == $category && _id != $id] | order(name asc){
  _id,
  name,
  "slug": slug.current,
  shortDescription,
  mainImage,
  category,
}`
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