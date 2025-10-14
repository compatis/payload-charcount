import type { CountStatus, DeltaType } from './constants.js'

import { COUNT_STATUS, COUNT_TRESHOLD, DELTA_TYPES } from './constants.js'
import { isValidCharCountInputs } from './isValidCharCountInputs.js'

interface CharCountConfig {
  color: string
  delta: number
  deltaType: DeltaType
  percent: number
  status: CountStatus
}
/**
 * Calculates the configuration for the character count based on the length, max, and min values
 * @param length - The length of the text
 * @param max - The maximum length of the text
 * @param min - The minimum length of the text
 * @returns The configuration for the character count with:
 * - color: The color to display for the count status ('red', 'green', 'orange', 'orangered')
 * - delta: The difference between current length and target length (min or max)
 * - deltaType: The type of remaining characters message to display ('charactersLeftOver', 'charactersToGo', 'charactersTooMany')
 * - percent: The percentage of completion between min and max length (0-100)
 * - status: The validation status ('missing', 'tooLong', 'good', 'almostGood', 'tooShort')
 */
function getCharCountConfig({
  length,
  max,
  min,
}: {
  length: number
  max: number
  min: number
}): CharCountConfig {
  const normalizedMin = Math.round(min)
  const normalizedMax = Math.round(max)

  const result = isValidCharCountInputs(length, normalizedMax, normalizedMin)

  if (!result.isValid) {
    throw new Error(result.error)
  }

  if (length === 0) {
    return {
      color: 'red',
      delta: normalizedMin - length,
      deltaType: DELTA_TYPES.TO_GO,
      percent: 0,
      status: COUNT_STATUS.MISSING,
    }
  }
  if (length > normalizedMax) {
    return {
      color: 'red',
      delta: length - normalizedMax,
      deltaType: DELTA_TYPES.TOO_MANY,
      percent: 100,
      status: COUNT_STATUS.TOO_LONG,
    }
  }
  if (length >= normalizedMin) {
    return {
      color: 'green',
      delta: normalizedMax - length,
      deltaType: DELTA_TYPES.LEFT_OVER,
      percent: Math.round(((length - normalizedMin) / (normalizedMax - normalizedMin)) * 100),
      status: COUNT_STATUS.GOOD,
    }
  }
  if (length > Math.round(normalizedMin * COUNT_TRESHOLD)) {
    return {
      color: 'orange',
      delta: normalizedMin - length,
      deltaType: DELTA_TYPES.TO_GO,
      percent: Math.round((length / normalizedMin) * 100),
      status: COUNT_STATUS.ALMOST_GOOD,
    }
  }
  return {
    color: 'orangered',
    delta: normalizedMin - length,
    deltaType: DELTA_TYPES.TO_GO,
    percent: Math.round((length / normalizedMin) * 100),
    status: COUNT_STATUS.TOO_SHORT,
  }
}

export { getCharCountConfig }
