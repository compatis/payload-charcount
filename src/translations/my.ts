import type { GenericTranslationsObject } from '@payloadcms/translations'

export const my: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'နည်းနည်းပဲကျန်သေးသည်',
    characterCount: '{{length}}/{{min}}-{{max}} လုံး, ',
    charactersLeftOver: '{{delta}} လုံးကျော်နေသည်',
    charactersToGo: '{{delta}} လုံးလိုသေးသည်',
    charactersTooMany: '{{delta}} လုံးများသွားသည်',
    good: 'ကောင်းမွန်သည်',
    missing: 'ပျောက်နေသည်',
    tooLong: 'တော်တော်ကြာသည်',
    tooShort: 'တော်တော်တိုသည်',
  },
}
