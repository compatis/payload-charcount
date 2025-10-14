import type { GenericTranslationsObject } from '@payloadcms/translations'

export const vi: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Gần đạt',
    characterCount: '{{length}}/{{min}}-{{max}} kí tự, ',
    charactersLeftOver: 'còn lại {{delta}}',
    charactersToGo: 'Còn {{delta}} ký tự nữa',
    charactersTooMany: 'vượt quá {{delta}} ký tự',
    good: 'Tốt',
    missing: 'Không đạt',
    tooLong: 'Quá dài',
    tooShort: 'Quá ngắn',
  },
}
