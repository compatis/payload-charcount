import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import { describe, expect, it } from 'vitest'

import { countCharacters } from '../countCharacters.js'

describe('countCharacters', () => {
  describe('string inputs', () => {
    it('should count characters in simple string', () => {
      expect(countCharacters('Hello')).toBe(5)
    })

    it('should count characters in empty string', () => {
      expect(countCharacters('')).toBe(0)
    })

    it('should count characters in string with spaces', () => {
      expect(countCharacters('Hello world')).toBe(11)
    })

    it('should count characters in string with special characters', () => {
      expect(countCharacters('Hello, world! 123')).toBe(17)
    })

    it('should count characters in string with unicode', () => {
      expect(countCharacters('Hello 世界')).toBe(8)
    })

    it('should count characters in string with emojis', () => {
      expect(countCharacters('Hello 👋 world 🌍')).toBe(17)
    })
  })

  describe('Lexical editor state inputs', () => {
    it('should count characters in simple Lexical state', () => {
      const lexicalState = {
        root: {
          children: [
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Hello world' }],
            },
          ],
        },
      }

      expect(countCharacters(lexicalState as DefaultTypedEditorState)).toBe(11)
    })

    it('should count characters in empty Lexical state', () => {
      const emptyLexicalState = {
        root: {
          children: [],
        },
      }

      expect(countCharacters(emptyLexicalState as unknown as DefaultTypedEditorState)).toBe(0)
    })

    it('should count characters in Lexical state with multiple paragraphs', () => {
      const multiParagraphLexicalState = {
        root: {
          children: [
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'First paragraph' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Second paragraph' }],
            },
          ],
        },
      }

      expect(countCharacters(multiParagraphLexicalState as DefaultTypedEditorState)).toBe(31)
    })

    it('should count characters in Lexical state with newlines (should be removed)', () => {
      const lexicalStateWithNewlines = {
        root: {
          children: [
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'Hello\nworld' }],
            },
          ],
        },
      }

      expect(countCharacters(lexicalStateWithNewlines as DefaultTypedEditorState)).toBe(10)
    })

    it('should count characters in Lexical state with formatting', () => {
      const formattedLexicalState = {
        root: {
          children: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', format: 1, text: 'Bold' },
                { type: 'text', text: ' and ' },
                { type: 'text', format: 2, text: 'italic' },
              ],
            },
          ],
        },
      }

      expect(countCharacters(formattedLexicalState as DefaultTypedEditorState)).toBe(15)
    })

    it('should count characters in Lexical state with nested structure', () => {
      const nestedLexicalState = {
        root: {
          children: [
            {
              type: 'heading',
              children: [{ type: 'text', text: 'Title' }],
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Content with ' },
                { type: 'text', format: 1, text: 'bold' },
                { type: 'text', text: ' text' },
              ],
            },
          ],
        },
      }

      expect(countCharacters(nestedLexicalState as DefaultTypedEditorState)).toBe(27)
    })
  })

  describe('undefined and invalid inputs', () => {
    it('should return 0 for undefined', () => {
      expect(countCharacters(undefined)).toBe(0)
    })

    it('should return 0 for null', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(countCharacters(null as any)).toBe(0)
    })

    it('should return 0 for invalid object', () => {
      const invalidObject = {
        notRoot: {
          children: [],
        },
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(countCharacters(invalidObject as any)).toBe(0)
    })

    it('should return 0 for number', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(countCharacters(123 as any)).toBe(0)
    })

    it('should return 0 for boolean', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(countCharacters(true as any)).toBe(0)
    })
  })

  describe('edge cases', () => {
    it('should handle string with only newlines', () => {
      expect(countCharacters('\n\n\n')).toBe(3)
    })

    it('should handle Lexical state with only newlines', () => {
      const newlineOnlyLexicalState = {
        root: {
          children: [
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '\n\n\n' }],
            },
          ],
        },
      }

      expect(countCharacters(newlineOnlyLexicalState as DefaultTypedEditorState)).toBe(0)
    })

    it('should handle very long string', () => {
      const longString = 'a'.repeat(10000)
      expect(countCharacters(longString)).toBe(10000)
    })

    it('should handle Lexical state with empty text nodes', () => {
      const emptyTextLexicalState = {
        root: {
          children: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: '' },
                { type: 'text', text: 'Hello' },
                { type: 'text', text: '' },
              ],
            },
          ],
        },
      }

      expect(countCharacters(emptyTextLexicalState as DefaultTypedEditorState)).toBe(5)
    })
  })
})
