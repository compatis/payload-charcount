import type { GenericTranslationsObject } from '@payloadcms/translations'

export const sv: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Nästan klar',
    characterCount: '{{length}}/{{min}}-{{max}} tecken, ',
    charactersLeftOver: '{{delta}} tecken blir över',
    charactersToGo: '{{delta}} tecken kvar',
    charactersTooMany: '{{delta}} tecken för mycket',
    good: 'Bra',
    missing: 'Saknas',
    tooLong: 'För lång',
    tooShort: 'För kort',
  },
}
