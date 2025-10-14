import type { GenericTranslationsObject } from '@payloadcms/translations'

export const it: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Ci siamo quasi',
    characterCount: '{{length}}/{{min}}-{{max}} caratteri, ',
    charactersLeftOver: '{{delta}} rimasti',
    charactersToGo: '{{delta}} mancanti',
    charactersTooMany: '{{delta}} in più',
    good: 'Bene',
    missing: 'Mancante',
    tooLong: 'Troppo lungo',
    tooShort: 'Troppo corto',
  },
}
