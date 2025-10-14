const DELTA_TYPES = {
  LEFT_OVER: 'charactersLeftOver',
  TO_GO: 'charactersToGo',
  TOO_MANY: 'charactersTooMany',
} as const

const COUNT_STATUS = {
  ALMOST_GOOD: 'almostGood',
  GOOD: 'good',
  MISSING: 'missing',
  TOO_LONG: 'tooLong',
  TOO_SHORT: 'tooShort',
} as const

const COUNT_TRESHOLD = 0.9

type DeltaType = (typeof DELTA_TYPES)[keyof typeof DELTA_TYPES]
type CountStatus = (typeof COUNT_STATUS)[keyof typeof COUNT_STATUS]

export type { CountStatus, DeltaType }
export { COUNT_STATUS, COUNT_TRESHOLD, DELTA_TYPES }
