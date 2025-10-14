import type { GenericTranslationsObject } from '@payloadcms/translations'

export const ro: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Aproape gata',
    characterCount: '{{length}}/{{min}}-{{max}} caractere, ',
    charactersLeftOver: '{{delta}} caractere în plus',
    charactersToGo: '{{delta}} caractere rămase',
    charactersTooMany: '{{delta}} caractere prea multe',
    good: 'Bun',
    missing: 'Lipsește',
    tooLong: 'Prea lung',
    tooShort: 'Prea scurt',
  },
}
