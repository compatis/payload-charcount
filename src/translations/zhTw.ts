import type { GenericTranslationsObject } from '@payloadcms/translations'

export const zhTw: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: '快完成了',
    characterCount: '{{length}}/{{min}}-{{max}} 字符, ',
    charactersLeftOver: '{{delta}} 字符剩餘',
    charactersToGo: '{{delta}} 字符待輸入',
    charactersTooMany: '{{delta}} 字符太多',
    good: '好',
    missing: '缺失',
    tooLong: '太長',
    tooShort: '太短',
  },
}
