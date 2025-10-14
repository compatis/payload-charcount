import type { GenericTranslationsObject } from '@payloadcms/translations'

export const ca: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Quasi hi som',
    characterCount: '{{length}}/{{min}}-{{max}} caràcters, ',
    charactersLeftOver: '{{delta}} restants',
    charactersToGo: '{{delta}} per escriure',
    charactersTooMany: '{{delta}} massa',
    good: 'Bé',
    missing: 'Falta',
    tooLong: 'Massa llarg',
    tooShort: 'Massa curt',
  },
}
