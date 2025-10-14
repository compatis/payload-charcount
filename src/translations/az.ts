import type { GenericTranslationsObject } from '@payloadcms/translations'

export const az: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Demək olar ki, çatdıq',
    characterCount: '{{length}}/{{min}}-{{max}} simvol, ',
    charactersLeftOver: '{{delta}} qalan',
    charactersToGo: '{{delta}} qalan',
    charactersTooMany: '{{delta}} çox',
    good: 'Yaxşı',
    missing: 'Yoxdur',
    tooLong: 'Çox uzun',
    tooShort: 'Çox qısa',
  },
}
