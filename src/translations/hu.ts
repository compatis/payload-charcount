import type { GenericTranslationsObject } from '@payloadcms/translations'

export const hu: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Majdnem kész',
    characterCount: '{{length}}/{{min}}-{{max}} karakter, ',
    charactersLeftOver: '{{delta}} hátra van',
    charactersToGo: '{{delta}} hátra van a beíráshoz',
    charactersTooMany: '{{delta}} túl sok',
    good: 'Jó',
    missing: 'Hiányzik',
    tooLong: 'Túl hosszú',
    tooShort: 'Túl rövid',
  },
}
