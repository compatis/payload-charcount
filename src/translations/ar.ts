import type { GenericTranslationsObject } from '@payloadcms/translations'

export const ar: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'قريبًا',
    characterCount: '{{length}}/{{min}}-{{max}} أحرف، ',
    charactersLeftOver: '{{delta}} متبقية',
    charactersToGo: '{{delta}} للمضي قدمًا',
    charactersTooMany: '{{delta}} أكثر من اللازم',
    good: 'جيد',
    missing: 'مفقود',
    tooLong: 'طويل جدًا',
    tooShort: 'قصير جدًا',
  },
}
