import type { GenericTranslationsObject } from '@payloadcms/translations'

export const nb: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Nesten der',
    characterCount: '{{length}}/{{min}}-{{max}} tegn, ',
    charactersLeftOver: '{{delta}} til overs',
    charactersToGo: '{{delta}} igjen',
    charactersTooMany: '{{delta}} for mange',
    good: 'Bra',
    missing: 'Mangler',
    tooLong: 'For lang',
    tooShort: 'For kort',
  },
}
