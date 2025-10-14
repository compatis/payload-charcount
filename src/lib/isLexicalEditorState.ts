import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

/**
 * Simple type guard to check if a value is a Lexical editor state
 */
function isLexicalEditorState(value: unknown): value is DefaultTypedEditorState {
  return (
    typeof value === 'object' &&
    value !== null &&
    'root' in value &&
    typeof value.root === 'object' &&
    value.root !== null &&
    'children' in value.root &&
    Array.isArray(value.root.children)
  )
}

export { isLexicalEditorState }
