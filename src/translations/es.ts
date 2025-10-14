import type { GenericTranslationsObject } from '@payloadcms/translations'

export const es: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Ya casi está',
    characterCount: '{{length}}/{{min}}-{{max}} caracteres, ',
    charactersLeftOver: '{{delta}} restantes',
    charactersToGo: '{{delta}} por completar',
    charactersTooMany: '{{delta}} de más',
    good: 'Bien',
    missing: 'Faltante',
    tooLong: 'Demasiado largo',
    tooShort: 'Demasiado corto',
  },
}
