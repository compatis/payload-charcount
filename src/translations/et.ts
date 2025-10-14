import type { GenericTranslationsObject } from '@payloadcms/translations'

export const et: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Peaaegu kohal',
    characterCount: '{{length}}/{{min}}-{{max}} tähemärki, ',
    charactersLeftOver: '{{delta}} alles',
    charactersToGo: '{{delta}} kirjutada',
    charactersTooMany: '{{delta}} liiga palju',
    good: 'Hea',
    missing: 'Puudub',
    tooLong: 'Liiga pikk',
    tooShort: 'Liiga lühike',
  },
}
