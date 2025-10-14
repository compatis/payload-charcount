import { describe, expect, it } from 'vitest'

import { isLexicalEditorState } from '../isLexicalEditorState.js'

describe('isLexicalEditorState', () => {
  describe('valid Lexical editor states', () => {
    it('should return true for valid Lexical editor state', () => {
      const validLexicalState = {
        root: {
          children: [
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Hello world' }],
            },
          ],
        },
      }

      expect(isLexicalEditorState(validLexicalState)).toBe(true)
    })

    it('should return true for empty Lexical editor state', () => {
      const emptyLexicalState = {
        root: {
          children: [],
        },
      }

      expect(isLexicalEditorState(emptyLexicalState)).toBe(true)
    })

    it('should return true for Lexical state with multiple children', () => {
      const multiChildLexicalState = {
        root: {
          children: [
            { type: 'paragraph', children: [{ type: 'text', text: 'First' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Second' }] },
          ],
        },
      }

      expect(isLexicalEditorState(multiChildLexicalState)).toBe(true)
    })
  })

  describe('invalid values', () => {
    it('should return false for null', () => {
      expect(isLexicalEditorState(null)).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isLexicalEditorState(undefined)).toBe(false)
    })

    it('should return false for string', () => {
      expect(isLexicalEditorState('hello')).toBe(false)
    })

    it('should return false for number', () => {
      expect(isLexicalEditorState(123)).toBe(false)
    })

    it('should return false for boolean', () => {
      expect(isLexicalEditorState(true)).toBe(false)
    })

    it('should return false for array', () => {
      expect(isLexicalEditorState([])).toBe(false)
    })
  })

  describe('invalid object structures', () => {
    it('should return false for object without root', () => {
      const invalidObject = {
        children: [],
      }

      expect(isLexicalEditorState(invalidObject)).toBe(false)
    })

    it('should return false for object with null root', () => {
      const invalidObject = {
        root: null,
      }

      expect(isLexicalEditorState(invalidObject)).toBe(false)
    })

    it('should return false for object with string root', () => {
      const invalidObject = {
        root: 'not an object',
      }

      expect(isLexicalEditorState(invalidObject)).toBe(false)
    })

    it('should return false for object with root without children', () => {
      const invalidObject = {
        root: {
          type: 'paragraph',
        },
      }

      expect(isLexicalEditorState(invalidObject)).toBe(false)
    })

    it('should return false for object with non-array children', () => {
      const invalidObject = {
        root: {
          children: 'not an array',
        },
      }

      expect(isLexicalEditorState(invalidObject)).toBe(false)
    })

    it('should return false for object with null children', () => {
      const invalidObject = {
        root: {
          children: null,
        },
      }

      expect(isLexicalEditorState(invalidObject)).toBe(false)
    })
  })

  describe('edge cases', () => {
    it('should return false for empty object', () => {
      expect(isLexicalEditorState({})).toBe(false)
    })

    it('should return false for object with extra properties but no root', () => {
      const invalidObject = {
        type: 'editor',
        content: 'some content',
        metadata: {},
      }

      expect(isLexicalEditorState(invalidObject)).toBe(false)
    })

    it('should return false for object with root but missing children', () => {
      const invalidObject = {
        root: {
          type: 'root',
          version: 1,
        },
      }

      expect(isLexicalEditorState(invalidObject)).toBe(false)
    })
  })
})
