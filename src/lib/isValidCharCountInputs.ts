/**
 * Validates character count input parameters and returns if the inputs are valid or invalid
 * @param length - The length of the text
 * @param max - The maximum length of the text
 * @param min - The minimum length of the text
 * @returns { isValid: true } if the inputs are valid, { isValid: false; error: string } if the inputs are invalid
 */
function isValidCharCountInputs(
  length: number,
  max: number,
  min: number,
): { error: string; isValid: false } | { isValid: true } {
  if (!Number.isFinite(length) || length < 0) {
    return {
      error: 'Length must be a finite non-negative number',
      isValid: false,
    }
  }
  if (!Number.isFinite(max) || max < 0) {
    return {
      error: 'Max value must be a finite non-negative number',
      isValid: false,
    }
  }
  if (!Number.isFinite(min) || min < 0) {
    return {
      error: 'Min value must be a finite non-negative number',
      isValid: false,
    }
  }
  if (min >= max) {
    return {
      error: 'Max value must be greater than min value',
      isValid: false,
    }
  }
  return {
    isValid: true,
  }
}

export { isValidCharCountInputs }
