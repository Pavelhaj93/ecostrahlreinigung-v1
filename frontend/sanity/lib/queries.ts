import {defineQuery} from 'next-sanity'

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
      _type == "heroCarousel" => {
        slides[]{
          _key,
          title,
          subtitle,
          description,
          buttonText,
          buttonLink,
          image{
            ...,
            asset
          }
        }
      },
      _type == "servicesSection" => {
        heading,
        services[]{
          _key,
          title,
          iconColor,
          advantages,
          description[]{
            ...,
            markDefs[]{
              ...,
              ${linkReference}
            }
          }
        },
        cleaningExamples{
          heading,
          examples
        }
      },
      _type == "pricingSection" => {
        heading,
        pricingCards[]{
          _key,
          serviceName,
          price,
          priceUnit,
          priceColor
        }
      },
      _type == "galleryCarousel" => {
        heading,
        subheading,
        galleryItems[]{
          _key,
          title,
          description,
          image{
            ...,
            asset
          }
        }
      },
      _type == "contactSection" => {
        heading,
        subheading,
        description,
        contactInfo{
          address,
          email,
          phone
        },
        showForm
      },
    },
  }
`)

export const getHomepageQuery = defineQuery(`
  *[_type == 'page' && slug.current == '/'][0]{
    _id,
    _type,
    name,
    slug,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
      _type == "heroCarousel" => {
        slides[]{
          _key,
          title,
          subtitle,
          description,
          buttonText,
          buttonLink,
          image{
            ...,
            asset
          }
        }
      },
      _type == "servicesSection" => {
        heading,
        services[]{
          _key,
          title,
          iconColor,
          advantages,
          description[]{
            ...,
            markDefs[]{
              ...,
              ${linkReference}
            }
          }
        },
        cleaningExamples{
          heading,
          examples
        }
      },
      _type == "pricingSection" => {
        heading,
        pricingCards[]{
          _key,
          serviceName,
          price,
          priceUnit,
          priceColor
        }
      },
      _type == "galleryCarousel" => {
        heading,
        subheading,
        galleryItems[]{
          _key,
          title,
          description,
          image{
            ...,
            asset
          }
        }
      },
      _type == "contactSection" => {
        heading,
        subheading,
        description,
        contactInfo{
          address,
          email,
          phone
        },
        showForm
      },
    },
  }
`)

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`)

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`)

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`)

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`)

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`)

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`)
