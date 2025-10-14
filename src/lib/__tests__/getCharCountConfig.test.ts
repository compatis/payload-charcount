import { describe, expect, it } from 'vitest'

import { COUNT_STATUS, DELTA_TYPES } from '../constants.js'
import { getCharCountConfig } from '../getCharCountConfig.js'

describe('getCharCountConfig', () => {
  describe('when length is 0', () => {
    it('should return missing status with red color', () => {
      const result = getCharCountConfig({ length: 0, max: 100, min: 10 })

      expect(result).toEqual({
        color: 'red',
        delta: 10,
        deltaType: DELTA_TYPES.TO_GO,
        percent: 0,
        status: COUNT_STATUS.MISSING,
      })
    })
  })

  describe('when length exceeds maximum', () => {
    it('should return too long status with red color', () => {
      const result = getCharCountConfig({ length: 150, max: 100, min: 10 })

      expect(result).toEqual({
        color: 'red',
        delta: 50,
        deltaType: DELTA_TYPES.TOO_MANY,
        percent: 100,
        status: COUNT_STATUS.TOO_LONG,
      })
    })

    it('should handle edge case when length equals max + 1', () => {
      const result = getCharCountConfig({ length: 101, max: 100, min: 10 })

      expect(result).toEqual({
        color: 'red',
        delta: 1,
        deltaType: DELTA_TYPES.TOO_MANY,
        percent: 100,
        status: COUNT_STATUS.TOO_LONG,
      })
    })
  })

  describe('when length is within valid range (>= min)', () => {
    it('should return good status with green color', () => {
      const result = getCharCountConfig({ length: 50, max: 100, min: 10 })

      expect(result).toEqual({
        color: 'green',
        delta: 50,
        deltaType: DELTA_TYPES.LEFT_OVER,
        percent: 44,
        status: COUNT_STATUS.GOOD,
      })
    })

    it('should return good status when length equals minimum', () => {
      const result = getCharCountConfig({ length: 10, max: 100, min: 10 })

      expect(result).toEqual({
        color: 'green',
        delta: 90,
        deltaType: DELTA_TYPES.LEFT_OVER,
        percent: 0,
        status: COUNT_STATUS.GOOD,
      })
    })

    it('should return good status when length equals maximum', () => {
      const result = getCharCountConfig({ length: 100, max: 100, min: 10 })

      expect(result).toEqual({
        color: 'green',
        delta: 0,
        deltaType: DELTA_TYPES.LEFT_OVER,
        percent: 100,
        status: COUNT_STATUS.GOOD,
      })
    })

    it('should calculate percentage correctly for various lengths', () => {
      const result1 = getCharCountConfig({ length: 55, max: 100, min: 10 })
      expect(result1.percent).toBe(50)

      const result2 = getCharCountConfig({ length: 32, max: 100, min: 10 })
      expect(result2.percent).toBe(24)
    })
  })

  describe('when length is close to minimum (almost good)', () => {
    it('should return almost good status with orange color when length > 90% of min', () => {
      const result = getCharCountConfig({ length: 9.1, max: 100, min: 10 })

      expect(result.color).toBe('orange')
      expect(result.delta).toBeCloseTo(0.9, 1)
      expect(result.deltaType).toBe(DELTA_TYPES.TO_GO)
      expect(result.percent).toBe(91)
      expect(result.status).toBe(COUNT_STATUS.ALMOST_GOOD)
    })

    it('should handle edge case when length is exactly 90% of minimum', () => {
      const result = getCharCountConfig({ length: 9, max: 100, min: 10 })

      expect(result.status).toBe(COUNT_STATUS.TOO_SHORT)
      expect(result.color).toBe('orangered')
    })

    it('should handle case when length is just above 90% threshold', () => {
      const result = getCharCountConfig({ length: 9.1, max: 100, min: 10 })

      expect(result.status).toBe(COUNT_STATUS.ALMOST_GOOD)
      expect(result.color).toBe('orange')
    })
  })

  describe('when length is too short', () => {
    it('should return too short status with orangered color', () => {
      const result = getCharCountConfig({ length: 5, max: 100, min: 10 })

      expect(result).toEqual({
        color: 'orangered',
        delta: 5,
        deltaType: DELTA_TYPES.TO_GO,
        percent: 50,
        status: COUNT_STATUS.TOO_SHORT,
      })
    })

    it('should handle very short lengths', () => {
      const result = getCharCountConfig({ length: 1, max: 100, min: 10 })

      expect(result).toEqual({
        color: 'orangered',
        delta: 9,
        deltaType: DELTA_TYPES.TO_GO,
        percent: 10,
        status: COUNT_STATUS.TOO_SHORT,
      })
    })

    it('should handle edge case when length is exactly at 90% threshold', () => {
      const result = getCharCountConfig({ length: 9, max: 100, min: 10 })

      expect(result.status).toBe(COUNT_STATUS.TOO_SHORT)
    })
  })

  describe('edge cases and boundary conditions', () => {
    it('should handle minimum values correctly', () => {
      const result = getCharCountConfig({ length: 0, max: 2, min: 1 })

      expect(result).toEqual({
        color: 'red',
        delta: 1,
        deltaType: DELTA_TYPES.TO_GO,
        percent: 0,
        status: COUNT_STATUS.MISSING,
      })
    })

    it('should throw error when min equals max', () => {
      expect(() => {
        getCharCountConfig({ length: 10, max: 10, min: 10 })
      }).toThrow('Max value must be greater than min value')
    })

    it('should throw error when min equals max but length is below', () => {
      expect(() => {
        getCharCountConfig({ length: 5, max: 10, min: 10 })
      }).toThrow('Max value must be greater than min value')
    })

    it('should handle large numbers', () => {
      const result = getCharCountConfig({ length: 5000, max: 10000, min: 1000 })

      expect(result).toEqual({
        color: 'green',
        delta: 5000,
        deltaType: DELTA_TYPES.LEFT_OVER,
        percent: 44,
        status: COUNT_STATUS.GOOD,
      })
    })

    it('should handle decimal lengths correctly', () => {
      const result = getCharCountConfig({ length: 8.5, max: 100, min: 10 })

      expect(result.status).toBe(COUNT_STATUS.TOO_SHORT)
      expect(result.color).toBe('orangered')
    })
  })

  describe('percentage calculation edge cases', () => {
    it('should round percentages correctly', () => {
      const result1 = getCharCountConfig({ length: 55, max: 100, min: 10 })
      expect(result1.percent).toBe(50)

      const result2 = getCharCountConfig({ length: 55.4, max: 100, min: 10 })
      expect(result2.percent).toBe(50)

      const result3 = getCharCountConfig({ length: 55.6, max: 100, min: 10 })
      expect(result3.percent).toBe(51)
    })
  })

  describe('edge cases: invalid min/max scenarios', () => {
    it('should throw error when min is greater than max', () => {
      expect(() => {
        getCharCountConfig({ length: 5, max: 10, min: 20 })
      }).toThrow('Max value must be greater than min value')
    })

    it('should throw error when min equals max and length is different', () => {
      expect(() => {
        getCharCountConfig({ length: 5, max: 10, min: 10 })
      }).toThrow('Max value must be greater than min value')
    })
  })

  describe('edge cases: negative values', () => {
    it('should throw error for negative length', () => {
      expect(() => {
        getCharCountConfig({ length: -5, max: 100, min: 10 })
      }).toThrow('Length must be a finite non-negative number')
    })

    it('should throw error for negative min value', () => {
      expect(() => {
        getCharCountConfig({ length: 5, max: 100, min: -10 })
      }).toThrow('Min value must be a finite non-negative number')
    })

    it('should throw error for negative max value', () => {
      expect(() => {
        getCharCountConfig({ length: 5, max: -10, min: 10 })
      }).toThrow('Max value must be a finite non-negative number')
    })

    it('should throw error for all negative values', () => {
      expect(() => {
        getCharCountConfig({ length: -5, max: -10, min: -20 })
      }).toThrow('Length must be a finite non-negative number')
    })
  })

  describe('edge cases: Infinity values', () => {
    it('should throw error for Infinity length', () => {
      expect(() => {
        getCharCountConfig({ length: Infinity, max: 100, min: 10 })
      }).toThrow('Length must be a finite non-negative number')
    })

    it('should throw error for Infinity max value', () => {
      expect(() => {
        getCharCountConfig({ length: 50, max: Infinity, min: 10 })
      }).toThrow('Max value must be a finite non-negative number')
    })

    it('should throw error for Infinity min value', () => {
      expect(() => {
        getCharCountConfig({ length: 50, max: 100, min: Infinity })
      }).toThrow('Min value must be a finite non-negative number')
    })

    it('should throw error for -Infinity length', () => {
      expect(() => {
        getCharCountConfig({ length: -Infinity, max: 100, min: 10 })
      }).toThrow('Length must be a finite non-negative number')
    })
  })

  describe('edge cases: NaN values', () => {
    it('should throw error for NaN length', () => {
      expect(() => {
        getCharCountConfig({ length: NaN, max: 100, min: 10 })
      }).toThrow('Length must be a finite non-negative number')
    })

    it('should throw error for NaN max value', () => {
      expect(() => {
        getCharCountConfig({ length: 50, max: NaN, min: 10 })
      }).toThrow('Max value must be a finite non-negative number')
    })

    it('should throw error for NaN min value', () => {
      expect(() => {
        getCharCountConfig({ length: 50, max: 100, min: NaN })
      }).toThrow('Min value must be a finite non-negative number')
    })

    it('should throw error for all NaN values', () => {
      expect(() => {
        getCharCountConfig({ length: NaN, max: NaN, min: NaN })
      }).toThrow('Length must be a finite non-negative number')
    })
  })

  describe('edge cases: mixed invalid values', () => {
    it('should throw error for mixed Infinity and NaN values', () => {
      expect(() => {
        getCharCountConfig({ length: Infinity, max: NaN, min: 10 })
      }).toThrow('Length must be a finite non-negative number')
    })

    it('should throw error for mixed negative and Infinity values', () => {
      expect(() => {
        getCharCountConfig({ length: -Infinity, max: 100, min: -Infinity })
      }).toThrow('Length must be a finite non-negative number')
    })
  })
})
