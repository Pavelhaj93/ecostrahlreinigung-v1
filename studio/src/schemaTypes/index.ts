import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {heroCarousel} from './objects/heroCarousel'
import {servicesSection} from './objects/servicesSection'
import {pricingSection} from './objects/pricingSection'
import {galleryCarousel} from './objects/galleryCarousel'
import {contactSection} from './objects/contactSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  heroCarousel,
  servicesSection,
  pricingSection,
  galleryCarousel,
  contactSection,
  link,
]
