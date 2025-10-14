import type { GenericTranslationsObject } from '@payloadcms/translations'

export const th: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'เกือบเสร็จแล้ว',
    characterCount: '{{length}}/{{min}}-{{max}} ตัวอักษร, ',
    charactersLeftOver: '{{delta}} ตัวอักษรที่เหลือ',
    charactersToGo: '{{delta}} ตัวอักษรที่ต้องการ',
    charactersTooMany: '{{delta}} ตัวอักษรเกินไป',
    good: 'ดี',
    missing: 'ขาดหายไป',
    tooLong: 'ยาวเกินไป',
    tooShort: 'สั้นเกินไป',
  },
}
