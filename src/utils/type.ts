/* eslint-disable eqeqeq */
// Type Check Utils from Lodash
export const isNumber = (target: unknown): boolean => {
  if (typeof target === 'number' && !isNaN(target)) return true
  return false
}

export const isString = (value: unknown): boolean => {
  const type = typeof value
  return (
    type === 'string' ||
    (type === 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]')
  )
}

export const isNull = (value: unknown): boolean => {
  return value === null
}

export const isUndefined = (value: unknown): boolean => {
  return value === undefined
}

const getTag = (value: unknown): string => {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

export const isObject = (value: unknown): boolean => {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export const isObjectLike = (value: unknown): boolean => {
  return typeof value === 'object' && value != null
}

export const isBoolean = (value: unknown): boolean => {
  return value === true || value === false || (isObjectLike(value) && getTag(value) === '[object Boolean]')
}
