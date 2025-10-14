import type { GenericTranslationsObject } from '@payloadcms/translations'

export const en: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Almost there',
    characterCount: '{{length}}/{{min}}-{{max}} chars, ',
    charactersLeftOver: '{{delta}} left over',
    charactersToGo: '{{delta}} to go',
    charactersTooMany: '{{delta}} too many',
    good: 'Good',
    missing: 'Missing',
    tooLong: 'Too long',
    tooShort: 'Too short',
  },
}
