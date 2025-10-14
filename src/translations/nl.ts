import type { GenericTranslationsObject } from '@payloadcms/translations'

export const nl: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Bijna klaar',
    characterCount: '{{length}}/{{min}}-{{max}} tekens, ',
    charactersLeftOver: '{{delta}} tekens over',
    charactersToGo: '{{delta}} tekens te gaan',
    charactersTooMany: '{{delta}} tekens te veel',
    good: 'Goed',
    missing: 'Ontbreekt',
    tooLong: 'Te lang',
    tooShort: 'Te kort',
  },
}
