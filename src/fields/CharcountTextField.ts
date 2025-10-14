import type { Field, TextField } from 'payload'

import { deepMerge } from 'payload'

type Config = {
  max: number
  min: number
}

type Text = (overrides: Omit<TextField, 'type'>, config: Config) => Field

const CharcountTextField: Text = (overrides, config) => {
  return deepMerge<TextField, Omit<TextField, 'type'>>(
    {
      type: 'text',
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

export { CharcountTextField }
