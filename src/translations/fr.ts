import type { GenericTranslationsObject } from '@payloadcms/translations'

export const fr: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'On y est presque',
    characterCount: '{{length}}/{{min}}-{{max}} caractères, ',
    charactersLeftOver: '{{delta}} restants',
    charactersToGo: '{{delta}} à ajouter',
    charactersTooMany: '{{delta}} en trop',
    good: 'Bien',
    missing: 'Manquant',
    tooLong: 'Trop long',
    tooShort: 'Trop court',
  },
}
