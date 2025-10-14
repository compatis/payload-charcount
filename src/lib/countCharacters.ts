import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'

import { isLexicalEditorState } from './isLexicalEditorState.js'

export function countCharacters(value: DefaultTypedEditorState | string | undefined) {
  if (typeof value === 'string') {
    return value.length
  } else if (isLexicalEditorState(value)) {
    return convertLexicalToPlaintext({ data: value }).replace(/\n/g, '').length
  } else {
    return 0
  }
}
