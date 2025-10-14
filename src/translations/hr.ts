import type { GenericTranslationsObject } from '@payloadcms/translations'

export const hr: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Gotovi smo skoro',
    characterCount: '{{length}}/{{min}}-{{max}} znakova, ',
    charactersLeftOver: '{{delta}} preostalo',
    charactersToGo: '{{delta}} preostalo za unijeti',
    charactersTooMany: '{{delta}} previše',
    good: 'Dobro',
    missing: 'Nedostaje',
    tooLong: 'Predugačko',
    tooShort: 'Prekratko',
  },
}
