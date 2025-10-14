import type { GenericTranslationsObject } from '@payloadcms/translations'

export const bg: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Почти стигнахме',
    characterCount: '{{length}}/{{min}}-{{max}} знака, ',
    charactersLeftOver: '{{delta}} оставащи',
    charactersToGo: '{{delta}} за въвеждане',
    charactersTooMany: '{{delta}} твърде много',
    good: 'Добре',
    missing: 'Липсва',
    tooLong: 'Твърде дълго',
    tooShort: 'Твърде късо',
  },
}
