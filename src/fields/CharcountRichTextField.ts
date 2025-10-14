import type { Field, RichTextField } from 'payload'

import { deepMerge } from 'payload'

type Config = {
  max: number
  min: number
}

type RichText = (overrides: Omit<RichTextField, 'type'>, config: Config) => Field

const CharcountRichTextField: RichText = (overrides, config) => {
  return deepMerge<RichTextField, Omit<RichTextField, 'type'>>(
    {
      type: 'richText',
      admin: {
        components: {
          // @ts-expect-error - afterInput is a valid prop for RichTextField
          afterInput: [
            {
              clientProps: config,
              path: '@compatis/payload-charcount/components#CharCount',
            },
          ],
        },
      },
    },
    overrides || {},
  )
}

export { CharcountRichTextField }
