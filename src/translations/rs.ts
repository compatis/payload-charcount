import type { GenericTranslationsObject } from '@payloadcms/translations'

export const rs: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Скоро готово',
    characterCount: '{{length}}/{{min}}-{{max}} карактера, ',
    charactersLeftOver: '{{delta}} карактера вишка',
    charactersToGo: '{{delta}} карактера преостало',
    charactersTooMany: '{{delta}} карактера превише',
    good: 'Добро',
    missing: 'Недостаје',
    tooLong: 'Предугачко',
    tooShort: 'Прекратко',
  },
}
