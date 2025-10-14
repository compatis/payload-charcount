import type { GenericTranslationsObject } from '@payloadcms/translations'

export const de: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Fast da',
    characterCount: '{{length}}/{{min}}-{{max}} Zeichen, ',
    charactersLeftOver: '{{delta}} verbleiben',
    charactersToGo: '{{delta}} übrig',
    charactersTooMany: '{{delta}} zu viel',
    good: 'Gut',
    missing: 'Fehlt',
    tooLong: 'Zu lang',
    tooShort: 'Zu kurz',
  },
}
