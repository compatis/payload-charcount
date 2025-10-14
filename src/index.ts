import type { Config } from 'payload'

import { deepMergeSimple } from 'payload/shared'

import { translations } from './translations/index.js'

const charCountPlugin =
  () =>
  (config: Config): Config => {
    return {
      ...config,
      i18n: {
        ...config.i18n,
        translations: deepMergeSimple(translations, config.i18n?.translations ?? {}),
      },
    }
  }

export default charCountPlugin
