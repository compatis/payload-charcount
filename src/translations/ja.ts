import type { GenericTranslationsObject } from '@payloadcms/translations'

export const ja: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'もう少しで完了',
    characterCount: '{{length}}/{{min}}-{{max}} 文字, ',
    charactersLeftOver: '{{delta}} 文字残り',
    charactersToGo: '{{delta}} 文字入力する必要があります',
    charactersTooMany: '{{delta}} 文字多すぎ',
    good: '良い',
    missing: '不足',
    tooLong: '長すぎる',
    tooShort: '短すぎる',
  },
}
