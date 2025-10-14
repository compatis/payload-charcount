import type { GenericTranslationsObject } from '@payloadcms/translations'

export const rsLatin: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Skoro gotovo',
    characterCount: '{{length}}/{{min}}-{{max}} karaktera, ',
    charactersLeftOver: '{{delta}} karaktera viška',
    charactersToGo: '{{delta}} karaktera preostalo',
    charactersTooMany: '{{delta}} karaktera previše',
    good: 'Dobro',
    missing: 'Nedostaje',
    tooLong: 'Predugačko',
    tooShort: 'Prekratko',
  },
}
