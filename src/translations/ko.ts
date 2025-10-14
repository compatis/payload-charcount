import type { GenericTranslationsObject } from '@payloadcms/translations'

export const ko: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: '거의 완료',
    characterCount: '{{length}}/{{min}}-{{max}} 자, ',
    charactersLeftOver: '{{delta}} 자 초과',
    charactersToGo: '{{delta}} 자 남음',
    charactersTooMany: '{{delta}} 자 초과',
    good: '좋음',
    missing: '누락됨',
    tooLong: '너무 김',
    tooShort: '너무 짧음',
  },
}
