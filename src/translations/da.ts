import type { GenericTranslationsObject } from '@payloadcms/translations'

export const da: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Næsten der',
    characterCount: '{{length}}/{{min}}-{{max}} tegn, ',
    charactersLeftOver: '{{delta}} tilbage',
    charactersToGo: '{{delta}} tilbage at skrive',
    charactersTooMany: '{{delta}} for mange',
    good: 'God',
    missing: 'Manglende',
    tooLong: 'For lang',
    tooShort: 'For kort',
  },
}
