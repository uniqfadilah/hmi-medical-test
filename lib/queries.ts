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
