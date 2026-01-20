import { type SchemaTypeDefinition } from 'sanity'
import medicalService from './medicalService'
import insight from './insight'
import specialistFeatured from './specialistFeatured'
import websiteSettings from './websiteSettings'
import specialtyCare from './specialtyCare'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [medicalService, insight, specialistFeatured, websiteSettings, specialtyCare],
}
