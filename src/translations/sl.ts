import type { GenericTranslationsObject } from '@payloadcms/translations'

export const sl: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'Skoraj končano',
    characterCount: '{{length}}/{{min}}-{{max}} znakov, ',
    charactersLeftOver: '{{delta}} znakov preveč',
    charactersToGo: '{{delta}} znakov preostalo',
    charactersTooMany: '{{delta}} znakov preveč',
    good: 'Dobro',
    missing: 'Manjkajoče',
    tooLong: 'Presega dovoljeno dolžino',
    tooShort: 'Prekratka dolžina',
  },
}
