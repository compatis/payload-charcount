import type { GenericTranslationsObject } from '@payloadcms/translations'

export const pt: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Quase lá',
    characterCount: '{{length}}/{{min}}-{{max}} caracteres, ',
    charactersLeftOver: '{{delta}} caracteres a mais',
    charactersToGo: '{{delta}} caracteres restantes',
    charactersTooMany: '{{delta}} caracteres em excesso',
    good: 'Bom',
    missing: 'Ausente',
    tooLong: 'Muito longo',
    tooShort: 'Muito curto',
  },
}
