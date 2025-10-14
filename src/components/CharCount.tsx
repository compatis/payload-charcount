'use client'

import { useField, useTranslation } from '@payloadcms/ui'
import React from 'react'

import type {
  PluginCharCountTranslationKeys,
  PluginCharCountTranslations,
} from '../translations/index.js'

import { countCharacters } from '../lib/countCharacters.js'
import { getCharCountConfig } from '../lib/getCharCountConfig.js'
import { isLexicalEditorState } from '../lib/isLexicalEditorState.js'
import styles from './CharCount.module.css'

interface CharCountProps {
  max?: number
  min?: number
  path: string
}
/**
 * A component that displays character count statistics for a text field.
 * Shows a status badge and progress bar based on configured min/max lengths.
 *
 * @param path - The path to the field in Payload CMS
 * @param min - Minimum required character length
 * @param max - Maximum allowed character length
 * @returns A character count display with status badge and progress bar, or null if min/max not provided
 *
 */
function CharCount({ max, min, path }: CharCountProps) {
  const { t } = useTranslation<PluginCharCountTranslations, PluginCharCountTranslationKeys>()

  const { value } = useField({ path })

  // Early return if the value does not match textfield or richtextfield
  if (!isLexicalEditorState(value) && typeof value !== 'string' && value !== undefined) {
    return null
  }

  // Early return if min/max not defined
  if (min === undefined || max === undefined) {
    return null
  }

  const length = countCharacters(value)

  const { color, delta, deltaType, percent, status } = getCharCountConfig({ length, max, min })

  return (
    <div
      aria-label={`Character count: ${length} of ${min}-${max} characters`}
      aria-live="polite"
      className={styles.container}
      role="status"
    >
      <div
        aria-label={`Status: ${t(`plugin-charcount:${status}`)}`}
        className={styles.badge}
        style={{
          backgroundColor: color,
        }}
      >
        <small>{t(`plugin-charcount:${status}`)}</small>
      </div>
      <div className={styles.text}>
        <small>{`${t('plugin-charcount:characterCount', { length, max, min })}${t(`plugin-charcount:${deltaType}`, { delta })}`}</small>
      </div>
      <div
        aria-label={`Progress: ${percent}% complete`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={percent}
        className={styles.progressBar}
        role="progressbar"
      >
        <div
          className={styles.progressFill}
          style={{
            backgroundColor: color,
            width: `${percent}%`,
          }}
        />
      </div>
    </div>
  )
}

export { CharCount }
