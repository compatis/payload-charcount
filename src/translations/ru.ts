import type { GenericTranslationsObject } from '@payloadcms/translations'

export const ru: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Почти готово',
    characterCount: '{{length}}/{{min}}-{{max}} символов, ',
    charactersLeftOver: 'осталось {{delta}} символов',
    charactersToGo: 'на {{delta}} символов меньше',
    charactersTooMany: 'на {{delta}} символов больше',
    good: 'Хорошо',
    missing: 'Отсутствует',
    tooLong: 'Слишком длинно',
    tooShort: 'Слишком коротко',
  },
}
