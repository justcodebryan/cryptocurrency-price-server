import { isBoolean, isNull, isNumber, isString, isUndefined } from '@/utils/type'

describe('Test utils type function', () => {
  test('test isNumber', () => {
    expect(isNumber(0)).toBeTruthy()

    expect(isNumber(Object(0))).toBeFalsy()
    expect(isNumber(NaN)).toBeFalsy()
    expect(isNumber([1, 2, 3])).toBeFalsy()
    expect(isNumber(true)).toBeFalsy()
    expect(isNumber(new Date())).toBeFalsy()
    expect(isNumber(new Error())).toBeFalsy()
    expect(isNumber({ a: 1 })).toBeFalsy()
    expect(isNumber(/x/)).toBeFalsy()
    expect(isNumber('a')).toBeFalsy()
  })

  test('test isString', () => {
    expect(isString('a')).toBeTruthy()
    expect(isString(Object('a'))).toBeTruthy()

    expect(isString([1, 2, 3])).toBeFalsy()
    expect(isString(true)).toBeFalsy()
    expect(isString(new Date())).toBeFalsy()
    expect(isString(new Error())).toBeFalsy()
    expect(isString({ a: 1 })).toBeFalsy()
    expect(isString(/x/)).toBeFalsy()
    expect(isString(1)).toBeFalsy()
  })

  test('test isNull', () => {
    expect(isNull(null)).toBeTruthy()

    expect(isNull([1, 2, 3])).toBeFalsy()
    expect(isNull(true)).toBeFalsy()
    expect(isNull(new Date())).toBeFalsy()
    expect(isNull(new Error())).toBeFalsy()
    expect(isNull({ a: 1 })).toBeFalsy()
    expect(isNull(/x/)).toBeFalsy()
    expect(isNull(1)).toBeFalsy()
    expect(isNull('a')).toBeFalsy()
  })

  test('test isUndefined', () => {
    expect(isUndefined()).toBeTruthy()
    expect(isUndefined(undefined)).toBeTruthy()

    expect(isUndefined([1, 2, 3])).toBeFalsy()
    expect(isUndefined(true)).toBeFalsy()
    expect(isUndefined(new Date())).toBeFalsy()
    expect(isUndefined(new Error())).toBeFalsy()
    expect(isUndefined({ a: 1 })).toBeFalsy()
    expect(isUndefined(/x/)).toBeFalsy()
    expect(isUndefined(1)).toBeFalsy()
    expect(isUndefined('a')).toBeFalsy()
  })

  test('test isBoolean', () => {
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean(false)).toBeTruthy()

    expect(isBoolean([1, 2, 3])).toBeFalsy()
    expect(isBoolean(new Date())).toBeFalsy()
    expect(isBoolean(new Error())).toBeFalsy()
    expect(isBoolean({ a: 1 })).toBeFalsy()
    expect(isBoolean(/x/)).toBeFalsy()
    expect(isBoolean(1)).toBeFalsy()
    expect(isBoolean('a')).toBeFalsy()
  })
})
