import type { GenericTranslationsObject } from '@payloadcms/translations'

export const lt: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Beveik baigta',
    characterCount: '{{length}}/{{min}}-{{max}} simbolių, ',
    charactersLeftOver: '{{delta}} likusių simbolių',
    charactersToGo: '{{delta}} simbolių liko',
    charactersTooMany: '{{delta}} per daug simbolių',
    good: 'Gerai',
    missing: 'Trūksta',
    tooLong: 'Per ilgas',
    tooShort: 'Per trumpas',
  },
}
