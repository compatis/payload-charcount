import type { GenericTranslationsObject } from '@payloadcms/translations'

export const cs: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Skoro hotovo',
    characterCount: '{{length}}/{{min}}-{{max}} znaků, ',
    charactersLeftOver: '{{delta}} zbývá',
    charactersToGo: '{{delta}} zbývá',
    charactersTooMany: '{{delta}} navíc',
    good: 'Dobré',
    missing: 'Chybí',
    tooLong: 'Příliš dlouhé',
    tooShort: 'Příliš krátké',
  },
}
