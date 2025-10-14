import type { GenericTranslationsObject } from '@payloadcms/translations'

export const ta: GenericTranslationsObject = {
  $schema: './translation-schema.json',
  'plugin-charcount': {
    almostGood: 'கிட்டத்தட்ட முடிந்துவிட்டது',
    characterCount: '{{length}}/{{min}}-{{max}} எழுத்துகள், ',
    charactersLeftOver: '{{delta}} மீதம் உள்ளது',
    charactersToGo: '{{delta}} எழுத வேண்டும்',
    charactersTooMany: '{{delta}} அதிகமாக உள்ளது',
    good: 'நன்று',
    missing: 'இல்லை',
    tooLong: 'மிக நீளம்',
    tooShort: 'மிகக் குறைவு',
  },
}
