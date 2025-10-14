import type { Field, TextareaField } from 'payload'

import { deepMerge } from 'payload'

type Config = {
  max: number
  min: number
}

type Textarea = (overrides: Omit<TextareaField, 'type'>, config: Config) => Field

const CharcountTextareaField: Textarea = (overrides, config) => {
  return deepMerge<TextareaField, Omit<TextareaField, 'type'>>(
    {
      type: 'textarea',
      admin: {
        components: {
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

export { CharcountTextareaField }
