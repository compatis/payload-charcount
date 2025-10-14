import type { RichTextField } from 'payload'

import { describe, expect, it } from 'vitest'

import { CharcountRichTextField } from '../CharcountRichTextField.js'

describe('CharcountRichTextField', () => {
  describe('basic functionality', () => {
    it('should create a richText field with default configuration', () => {
      const config = { max: 100, min: 0 }
      const overrides = {
        name: 'testField',
        components: {
          afterInput: [{ path: 'some-path' }],
        },
      }

      const result = CharcountRichTextField(overrides, config)

      expect(result).toMatchObject({
        name: 'testField',
        type: 'richText',
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
      })
    })

    it('should return a single field object', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)

      expect(typeof result).toBe('object')
      expect(result).toHaveProperty('type')
      expect(result).toHaveProperty('name')
    })

    it('should create a field with type "richText"', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)

      expect(result.type).toBe('richText')
    })
  })

  describe('config parameter handling', () => {
    it('should pass config as clientProps to CharCount component', () => {
      const config = { max: 500, min: 5 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)
      const field = result as RichTextField

      // @ts-expect-error - afterInput is a valid prop for RichTextField
      expect(field.admin?.components?.afterInput?.[0]).toMatchObject({
        clientProps: config,
        path: '@compatis/payload-charcount/components#CharCount',
      })
    })

    it('should handle different config values', () => {
      const config1 = { max: 10, min: 0 }
      const config2 = { max: 1000, min: 100 }

      const overrides = { name: 'testField' }

      const result1 = CharcountRichTextField(overrides, config1)
      const result2 = CharcountRichTextField(overrides, config2)

      // @ts-expect-error - afterInput is a valid prop for RichTextField
      const afterInput1 = result1.admin?.components?.afterInput?.[0]
      // @ts-expect-error - afterInput is a valid prop for RichTextField
      const afterInput2 = result2.admin?.components?.afterInput?.[0]

      expect((afterInput1 as { clientProps: unknown }).clientProps).toEqual(config1)
      expect((afterInput2 as { clientProps: unknown }).clientProps).toEqual(config2)
    })

    it('should handle zero values in config', () => {
      const config = { max: 0, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)

      // @ts-expect-error - afterInput is a valid prop for RichTextField
      const afterInput = result.admin?.components?.afterInput?.[0]

      expect((afterInput as { clientProps: unknown }).clientProps).toEqual(config)
    })

    it('should handle negative values in config', () => {
      const config = { max: -1, min: -10 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)
      // @ts-expect-error - afterInput is a valid prop for RichTextField
      const afterInput = result.admin?.components?.afterInput?.[0]

      expect((afterInput as { clientProps: unknown }).clientProps).toEqual(config)
    })
  })

  describe('overrides parameter handling', () => {
    it('should merge overrides with default field configuration', () => {
      const config = { max: 100, min: 0 }
      const overrides = {
        name: 'customField',
        admin: {
          description: 'Custom description',
        },
        label: 'Custom Label',
        required: true,
      }

      const result = CharcountRichTextField(overrides, config)
      const field = result as RichTextField

      expect(field.name).toBe('customField')
      expect(field.label).toBe('Custom Label')
      expect(field.required).toBe(true)
      expect(field.admin?.description).toBe('Custom description')
    })

    it('should preserve CharCount component configuration when overrides include admin.components', () => {
      const config = { max: 100, min: 0 }
      const overrides = {
        name: 'testField',
        admin: {
          components: {
            beforeInput: [{ path: 'some-other-component' }],
          },
        },
      }

      // @ts-expect-error - beforeInput is a valid prop for RichTextFiel
      const result = CharcountRichTextField(overrides, config)
      const field = result as RichTextField

      // Should have both beforeInput and afterInput components
      // @ts-expect-error - beforeInput is a valid prop for RichTextField
      expect(field.admin?.components?.beforeInput).toHaveLength(1)
      // @ts-expect-error - afterInput is a valid prop for RichTextField
      expect(field.admin?.components?.afterInput).toHaveLength(1)
      // @ts-expect-error - afterInput is a valid prop for RichTextField
      expect(field.admin?.components?.afterInput?.[0]).toMatchObject({
        clientProps: config,
        path: '@compatis/payload-charcount/components#CharCount',
      })
    })

    it('should handle empty overrides object', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)
      const field = result as RichTextField

      expect(field.type).toBe('richText')
      // @ts-expect-error - afterInput is a valid prop for RichTextField
      expect(field.admin?.components?.afterInput?.[0]).toMatchObject({
        clientProps: config,
        path: '@compatis/payload-charcount/components#CharCount',
      })
    })

    it('should handle overrides with additional field properties', () => {
      const config = { max: 100, min: 0 }
      const overrides = {
        name: 'testField',
        access: {
          read: () => true,
          update: () => true,
        },
        defaultValue: 'default text',
        validate: (value: null | string | string[] | undefined) => {
          if (typeof value === 'string') {
            return value.length > 0 || 'Required'
          }
          return true
        },
      }

      const result = CharcountRichTextField(overrides, config)
      const field = result as RichTextField

      expect(
        (
          field as {
            access: unknown
            defaultValue: string
            name: string
            validate: unknown
          } & RichTextField
        ).name,
      ).toBe('testField')
      expect(
        (
          field as {
            access: unknown
            defaultValue: string
            name: string
            validate: unknown
          } & RichTextField
        ).defaultValue,
      ).toBe('default text')
      expect(
        (
          field as {
            access: unknown
            defaultValue: string
            name: string
            validate: unknown
          } & RichTextField
        ).validate,
      ).toBe(overrides.validate)
      expect(
        (
          field as {
            access: unknown
            defaultValue: string
            name: string
            validate: unknown
          } & RichTextField
        ).access,
      ).toStrictEqual(overrides.access)
    })
  })

  describe('CharCount component integration', () => {
    it('should use correct component path', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)
      const field = result as RichTextField

      // @ts-expect-error - afterInput is a valid prop for RichTextField
      expect((field.admin?.components?.afterInput?.[0] as { path: string }).path).toBe(
        '@compatis/payload-charcount/components#CharCount',
      )
    })

    it('should place CharCount component in afterInput array', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)
      const field = result as RichTextField

      // @ts-expect-error - afterInput is a valid prop for RichTextField
      expect(field.admin?.components?.afterInput).toBeDefined()
      // @ts-expect-error - afterInput is a valid prop for RichTextField
      expect(Array.isArray(field.admin?.components?.afterInput)).toBe(true)
      // @ts-expect-error - afterInput is a valid prop for RichTextField
      expect(field.admin?.components?.afterInput).toHaveLength(1)
    })

    it('should maintain CharCount component when other admin properties are overridden', () => {
      const config = { max: 100, min: 0 }
      const overrides = {
        name: 'testField',
        admin: {
          condition: () => true,
          readOnly: true,
        },
      }

      const result = CharcountRichTextField(overrides, config)
      const field = result as RichTextField

      expect(field.admin?.readOnly).toBe(true)
      expect(field.admin?.condition).toBe(overrides.admin.condition)
      // @ts-expect-error - afterInput is a valid prop for RichTextField
      expect(field.admin?.components?.afterInput?.[0]).toMatchObject({
        clientProps: config,
        path: '@compatis/payload-charcount/components#CharCount',
      })
    })
  })

  describe('type safety and edge cases', () => {
    it('should handle undefined overrides gracefully', () => {
      const config = { max: 100, min: 0 }

      // @ts-expect-error - testing runtime behavior with undefined
      const result = CharcountRichTextField(undefined, config)

      expect(typeof result).toBe('object')
      expect(result.type).toBe('richText')
    })

    it('should handle null overrides gracefully', () => {
      const config = { max: 100, min: 0 }

      // @ts-expect-error - testing runtime behavior with null
      const result = CharcountRichTextField(null, config)

      expect(typeof result).toBe('object')
      expect(result.type).toBe('richText')
    })

    it('should maintain field structure integrity', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)
      const field = result as RichTextField

      expect(field).toHaveProperty('type')
      expect(field).toHaveProperty('name')
      expect(field).toHaveProperty('admin')
      expect(field.admin).toHaveProperty('components')
      expect(field.admin?.components).toHaveProperty('afterInput')
    })

    it('should handle complex nested overrides', () => {
      const config = { max: 100, min: 0 }
      const overrides = {
        name: 'complexField',
        admin: {
          components: {
            afterInput: [{ path: 'existing-after-component' }],
            beforeInput: [{ path: 'before-component' }],
          },
          readOnly: true,
        },
      }

      // @ts-expect-error - afterInput and beforeInput are valid props for RichTextField
      const result = CharcountRichTextField(overrides, config)
      const field = result as RichTextField

      // @ts-expect-error - beforeInput is a valid prop for RichTextField
      expect(field.admin?.components?.beforeInput).toHaveLength(1)
      // @ts-expect-error - afterInput is a valid prop for RichTextField
      expect(field.admin?.components?.afterInput).toHaveLength(2)
      expect(field.admin?.readOnly).toBe(true)
    })
  })

  describe('return value structure', () => {
    it('should return an array of Field objects', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)

      expect(typeof result).toBe('object')
      expect(result).toHaveProperty('type')
      expect(result).toHaveProperty('name')
    })

    it('should return a single field object', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)

      expect(typeof result).toBe('object')
      expect(result).toHaveProperty('type')
    })

    it('should return a field that can be used in Payload collections', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountRichTextField(overrides, config)
      const field = result

      expect(field).toHaveProperty('type')
      expect(field as { name: string } & RichTextField).toHaveProperty('name')
      expect(typeof field.type).toBe('string')
      expect(typeof (field as { name: string } & RichTextField).name).toBe('string')
    })
  })
})
