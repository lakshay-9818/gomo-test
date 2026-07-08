import { type SchemaTypeDefinition } from 'sanity'

import { seo } from './seo'
import { homepage } from './homepage'
import { solutionCategory } from './solutionCategory'
// import { product } from './product'
// import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [seo, homepage, solutionCategory],
}
