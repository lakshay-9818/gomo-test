import { type SchemaTypeDefinition } from 'sanity'

import { seo } from './seo'
import { homepage } from './homepage'
import { solutionCategory } from './solutionCategory'
import { featureItem } from './feature'
import { insightType } from './Insight'
import { navLinkType } from './Objects/navLink'
import { navDropdownType } from './Objects/navDropDown'
import { headerSettingsType } from './headerSettings'
import {footerSettingsType} from './footerSettings'
import {footerContactGroupType} from './Objects/footerContactGroup'
import {footerLinkGroupType} from './Objects/footerLinkGroup'
import { product } from './product'
// import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seo, 
    homepage, 
    solutionCategory, 
    featureItem, 
    insightType, 
    navLinkType, 
    navDropdownType, 
    headerSettingsType,
    footerContactGroupType,
    footerLinkGroupType,
    footerSettingsType,
    product, 
    // siteSettings
  ],
}
