import type { GenericTranslationsObject } from '@payloadcms/translations'

export const zh: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: '快完成了',
    characterCount: '{{length}}/{{min}}-{{max}} 字符, ',
    charactersLeftOver: '{{delta}} 字符剩余',
    charactersToGo: '{{delta}} 字符待输入',
    charactersTooMany: '{{delta}} 字符太多',
    good: '好',
    missing: '缺失',
    tooLong: '太长',
    tooShort: '太短',
  },
}
