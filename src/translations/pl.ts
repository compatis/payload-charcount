import type { GenericTranslationsObject } from '@payloadcms/translations'

export const pl: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Prawie gotowe',
    characterCount: '{{length}}/{{min}}-{{max}} znaków, ',
    charactersLeftOver: 'zostało {{delta}} znaków',
    charactersToGo: 'pozostało {{delta}} znaków',
    charactersTooMany: '{{delta}} znaków za dużo',
    good: 'Dobrze',
    missing: 'Brakuje',
    tooLong: 'Zbyt długie',
    tooShort: 'Zbyt krótkie',
  },
}
