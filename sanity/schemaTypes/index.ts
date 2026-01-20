import { type SchemaTypeDefinition } from 'sanity'
import medicalService from './medicalService'
import insight from './insight'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [medicalService, insight],
}
