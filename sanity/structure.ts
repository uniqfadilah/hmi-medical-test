import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Website Settings as a singleton (only one document)
      S.listItem()
        .title('Website Settings')
        .id('websiteSettings')
        .child(
          S.document()
            .schemaType('websiteSettings')
            .documentId('websiteSettings')
        ),
      // All other document types
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'websiteSettings'
      ),
    ])
