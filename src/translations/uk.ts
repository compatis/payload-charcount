import type { GenericTranslationsObject } from '@payloadcms/translations'

export const uk: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Ще трошки',
    characterCount: '{{length}}/{{min}}-{{max}} символів, ',
    charactersLeftOver: 'залишилось {{delta}} символів',
    charactersToGo: ' на {{delta}} символів коротше',
    charactersTooMany: 'на {{delta}} символів довше',
    good: 'Чудово',
    missing: 'Відсутнє',
    tooLong: 'Задовгий',
    tooShort: 'Закороткий',
  },
}
