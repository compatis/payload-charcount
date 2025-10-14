import type { GenericTranslationsObject } from '@payloadcms/translations'

export const tr: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Neredeyse tamam',
    characterCount: '{{length}}/{{min}}-{{max}} karakter, ',
    charactersLeftOver: '{{delta}} karakter kaldı',
    charactersToGo: '{{delta}} karakter kaldı',
    charactersTooMany: '{{delta}} karakter fazla',
    good: 'İyi',
    missing: 'Eksik',
    tooLong: 'Çok uzun',
    tooShort: 'Çok kısa',
  },
}
