import type { TextareaField } from 'payload'

import { describe, expect, it } from 'vitest'

import { CharcountTextareaField } from '../CharcountTextareaField.js'

describe('CharcountTextareaField', () => {
  describe('basic functionality', () => {
    it('should create a textarea field with default configuration', () => {
      const config = { max: 100, min: 0 }
      const overrides = {
        name: 'testField',
        components: {
          afterInput: [{ path: 'some-path' }],
        },
      }

      const result = CharcountTextareaField(overrides, config)

      expect(result).toMatchObject({
        name: 'testField',
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
      })
    })

    it('should return a single field object', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)

      expect(typeof result).toBe('object')
      expect(result).toHaveProperty('type')
      expect(result).toHaveProperty('name')
    })

    it('should create a field with type "textarea"', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)

      expect(result.type).toBe('textarea')
    })
  })

  describe('config parameter handling', () => {
    it('should pass config as clientProps to CharCount component', () => {
      const config = { max: 500, min: 5 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      expect(field.admin?.components?.afterInput?.[0]).toMatchObject({
        clientProps: config,
        path: '@compatis/payload-charcount/components#CharCount',
      })
    })

    it('should handle different config values', () => {
      const config1 = { max: 10, min: 0 }
      const config2 = { max: 1000, min: 100 }

      const overrides = { name: 'testField' }

      const result1 = CharcountTextareaField(overrides, config1)
      const result2 = CharcountTextareaField(overrides, config2)

      const field1 = result1 as TextareaField
      const field2 = result2 as TextareaField

      expect(
        (field1.admin?.components?.afterInput?.[0] as { clientProps: unknown }).clientProps,
      ).toEqual(config1)
      expect(
        (field2.admin?.components?.afterInput?.[0] as { clientProps: unknown }).clientProps,
      ).toEqual(config2)
    })

    it('should handle zero values in config', () => {
      const config = { max: 0, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      expect(
        (field.admin?.components?.afterInput?.[0] as { clientProps: unknown }).clientProps,
      ).toEqual(config)
    })

    it('should handle negative values in config', () => {
      const config = { max: -1, min: -10 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      expect(
        (field.admin?.components?.afterInput?.[0] as { clientProps: unknown }).clientProps,
      ).toEqual(config)
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

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

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

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      // Should have both beforeInput and afterInput components
      expect(field.admin?.components?.beforeInput).toHaveLength(1)
      expect(field.admin?.components?.afterInput).toHaveLength(1)
      expect(field.admin?.components?.afterInput?.[0]).toMatchObject({
        clientProps: config,
        path: '@compatis/payload-charcount/components#CharCount',
      })
    })

    it('should handle empty overrides object', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      expect(field.type).toBe('textarea')
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

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      expect(
        (
          field as {
            access: unknown
            defaultValue: string
            name: string
            validate: unknown
          } & TextareaField
        ).name,
      ).toBe('testField')
      expect(
        (
          field as {
            access: unknown
            defaultValue: string
            name: string
            validate: unknown
          } & TextareaField
        ).defaultValue,
      ).toBe('default text')
      expect(
        (
          field as {
            access: unknown
            defaultValue: string
            name: string
            validate: unknown
          } & TextareaField
        ).validate,
      ).toBe(overrides.validate)
      expect(
        (
          field as {
            access: unknown
            defaultValue: string
            name: string
            validate: unknown
          } & TextareaField
        ).access,
      ).toStrictEqual(overrides.access)
    })
  })

  describe('CharCount component integration', () => {
    it('should use correct component path', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      expect((field.admin?.components?.afterInput?.[0] as { path: string }).path).toBe(
        '@compatis/payload-charcount/components#CharCount',
      )
    })

    it('should place CharCount component in afterInput array', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      expect(field.admin?.components?.afterInput).toBeDefined()
      expect(Array.isArray(field.admin?.components?.afterInput)).toBe(true)
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

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      expect(field.admin?.readOnly).toBe(true)
      expect(field.admin?.condition).toBe(overrides.admin.condition)
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
      const result = CharcountTextareaField(undefined, config)

      expect(typeof result).toBe('object')
      expect(result.type).toBe('textarea')
    })

    it('should handle null overrides gracefully', () => {
      const config = { max: 100, min: 0 }

      // @ts-expect-error - testing runtime behavior with null
      const result = CharcountTextareaField(null, config)

      expect(typeof result).toBe('object')
      expect(result.type).toBe('textarea')
    })

    it('should maintain field structure integrity', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      // Verify the field has all expected properties
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

      const result = CharcountTextareaField(overrides, config)
      const field = result as TextareaField

      // Should preserve beforeInput and afterInput gets merged by deepMerge
      expect(field.admin?.components?.beforeInput).toHaveLength(1)
      expect(field.admin?.components?.afterInput).toHaveLength(2) // existing + CharCount (merged)
      expect(field.admin?.readOnly).toBe(true)
    })
  })

  describe('return value structure', () => {
    it('should return an array of Field objects', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)

      expect(typeof result).toBe('object')
      expect(result).toHaveProperty('type')
      expect(result).toHaveProperty('name')
    })

    it('should return a single field object', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)

      expect(typeof result).toBe('object')
      expect(result).toHaveProperty('type')
    })

    it('should return a field that can be used in Payload collections', () => {
      const config = { max: 100, min: 0 }
      const overrides = { name: 'testField' }

      const result = CharcountTextareaField(overrides, config)
      const field = result

      // Basic field structure that Payload expects
      expect(field).toHaveProperty('type')
      expect(field as { name: string } & TextareaField).toHaveProperty('name')
      expect(typeof field.type).toBe('string')
      expect(typeof (field as { name: string } & TextareaField).name).toBe('string')
    })
  })
})
