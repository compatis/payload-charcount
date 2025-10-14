import type { GenericTranslationsObject } from '@payloadcms/translations'

export const he: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'כמעט שם',
    characterCount: '{{length}}/{{min}}-{{max}} תו, ',
    charactersLeftOver: '{{delta}} נותרו',
    charactersToGo: '{{delta}} להקליד',
    charactersTooMany: '{{delta}} יותר מידי',
    good: 'טוב',
    missing: 'חסר',
    tooLong: 'ארוך מידי',
    tooShort: 'קצר מידי',
  },
}
