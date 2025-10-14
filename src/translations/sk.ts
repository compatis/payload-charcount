import type { GenericTranslationsObject } from '@payloadcms/translations'

export const sk: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Takmer hotovo',
    characterCount: '{{length}}/{{min}}-{{max}} znakov, ',
    charactersLeftOver: '{{delta}} znakov navyše',
    charactersToGo: 'Ešte {{delta}} znakov',
    charactersTooMany: '{{delta}} znakov navyše',
    good: 'Dobre',
    missing: 'Chýba',
    tooLong: 'Príliš dlhé',
    tooShort: 'Príliš krátke',
  },
}
