import { client } from '@/sanity/lib/client'

export interface MedicalService {
  _id: string
  title: string
  description: string
  icon?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  order?: number
}

export async function getMedicalServices(): Promise<MedicalService[]> {
  const query = `*[_type == "medicalService"] | order(coalesce(order, 999) asc, title asc) {
    _id,
    title,
    description,
    icon {
      asset,
      alt
    },
    order
  }`

  return await client.fetch(query)
}

export interface Insight {
  _id: string
  title: string
  description?: string
  thumbnail?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  order?: number
  isFeatured?: boolean
}

export async function getInsights(): Promise<Insight[]> {
  const query = `*[_type == "insight"] | order(coalesce(order, 999) asc, title asc) {
    _id,
    title,
    description,
    thumbnail {
      asset,
      alt
    },
    order,
    isFeatured
  }`

  return await client.fetch(query)
}

export interface SpecialistFeatured {
  _id: string
  title: string
  description: string
  image?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  order?: number
}

export async function getSpecialistFeatured(): Promise<SpecialistFeatured[]> {
  const query = `*[_type == "specialistFeatured"] | order(coalesce(order, 999) asc, title asc) {
    _id,
    title,
    description,
    image {
      asset,
      alt
    },
    order
  }`

  const results = await client.fetch(query)
  return results
}

export interface WebsiteSettings {
  _id: string
  address?: string
  phone?: string
  whatsapp?: string
  email_feedback?: string
  email_general?: string
  satellite_address?: string
  email_corporate?: string
  email?: string
  maps_src?: string
  banner?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
}

export async function getWebsiteSettings(): Promise<WebsiteSettings | null> {
  // Singleton pattern - fetches the single website settings document
  // Uses fixed ID 'websiteSettings' (enforced by structure.ts)
  const query = `*[_type == "websiteSettings" && _id == "websiteSettings"][0] {
    _id,
    address,
    phone,
    whatsapp,
    email_feedback,
    email_general,
    satellite_address,
    email_corporate,
    email,
    maps_src,
    banner {
      asset,
      alt
    }
  }`

  return await client.fetch(query)
}

export interface PortableTextBlock {
  _type: string
  _key?: string
  style?: string
  children?: Array<{
    _type: string
    _key?: string
    text?: string
    marks?: string[]
  }>
}

export interface SpecialtyCare {
  _id: string
  title: string
  description: PortableTextBlock[] // Portable text array
  slug?: {
    current: string
  }
  thumbnail?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
}

export async function getSpecialtyCare(): Promise<SpecialtyCare[]> {
  const query = `*[_type == "specialtyCare"] | order(title asc) {
    _id,
    title,
    description,
    slug {
      current
    },
    thumbnail {
      asset,
      alt
    }
  }`

  return await client.fetch(query)
}

export async function getSpecialtyCareBySlug(slug: string): Promise<SpecialtyCare | null> {
  if (!slug) {
    return null
  }

  const query = `*[_type == "specialtyCare" && slug.current == $slug][0] {
    _id,
    title,
    description,
    slug {
      current
    },
    thumbnail {
      asset,
      alt
    }
  }`

  return await client.fetch(query, { slug })
}
