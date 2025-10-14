import type { GenericTranslationsObject } from '@payloadcms/translations'

export const is: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Næstum komið',
    characterCount: '{{length}}/{{min}}-{{max}} stafir, ',
    charactersLeftOver: '{{delta}} eftir',
    charactersToGo: '{{delta}} eftir',
    charactersTooMany: '{{delta}} of mikið',
    good: 'Gott',
    missing: 'Vantar',
    tooLong: 'Of langt',
    tooShort: 'Of stutt',
  },
}
