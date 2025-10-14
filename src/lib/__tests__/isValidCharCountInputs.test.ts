import { describe, expect, it } from 'vitest'

import { isValidCharCountInputs } from '../isValidCharCountInputs.js'

describe('isValidCharCountInputs', () => {
  describe('valid inputs', () => {
    it('should return true for valid inputs', () => {
      const result = isValidCharCountInputs(10, 100, 50)
      expect(result.isValid).toBe(true)
    })

    it('should return true for zero values', () => {
      const result = isValidCharCountInputs(0, 100, 0)
      expect(result.isValid).toBe(true)
    })

    it('should return true for decimal values (will be rounded)', () => {
      const result = isValidCharCountInputs(10.5, 101, 50)
      expect(result.isValid).toBe(true)
    })
  })

  describe('invalid length', () => {
    it('should return false for negative length', () => {
      const result = isValidCharCountInputs(-5, 100, 10)
      expect(result.isValid).toBe(false)
    })

    it('should return false for Infinity length', () => {
      const result = isValidCharCountInputs(Infinity, 100, 10)
      expect(result.isValid).toBe(false)
    })

    it('should return false for NaN length', () => {
      const result = isValidCharCountInputs(NaN, 100, 10)
      expect(result.isValid).toBe(false)
    })
  })

  describe('invalid max', () => {
    it('should return false for negative max', () => {
      const result = isValidCharCountInputs(10, -100, 10)
      expect(result.isValid).toBe(false)
    })

    it('should return false for Infinity max', () => {
      const result = isValidCharCountInputs(10, Infinity, 10)
      expect(result.isValid).toBe(false)
    })

    it('should return false for NaN max', () => {
      const result = isValidCharCountInputs(10, NaN, 10)
      expect(result.isValid).toBe(false)
    })
  })

  describe('invalid min', () => {
    it('should return false for negative min', () => {
      const result = isValidCharCountInputs(10, 100, -10)
      expect(result.isValid).toBe(false)
    })

    it('should return false for Infinity min', () => {
      const result = isValidCharCountInputs(10, 100, Infinity)
      expect(result.isValid).toBe(false)
    })

    it('should return false for NaN min', () => {
      const result = isValidCharCountInputs(10, 100, NaN)
      expect(result.isValid).toBe(false)
    })
  })

  describe('invalid min/max relationship', () => {
    it('should return false when min equals max', () => {
      const result = isValidCharCountInputs(10, 100, 100)
      expect(result.isValid).toBe(false)
    })

    it('should return false when min is greater than max', () => {
      const result = isValidCharCountInputs(10, 50, 100)
      expect(result.isValid).toBe(false)
    })
  })
})
