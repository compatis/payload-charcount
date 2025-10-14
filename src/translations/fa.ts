import type { GenericTranslationsObject } from '@payloadcms/translations'

export const fa: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'چیزیی باقی نمونده',
    characterCount: '{{length}}/{{min}}-{{max}} کلمه، ',
    charactersLeftOver: '{{delta}} باقی مانده',
    charactersToGo: '{{delta}} باقی مانده',
    charactersTooMany: '{{delta}} بیش از حد',
    good: 'خوب',
    missing: 'ناقص',
    tooLong: 'خیلی طولانی',
    tooShort: 'خیلی کوتاه',
  },
}
