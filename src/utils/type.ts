export const isNumber = (target: unknown): boolean => {
  if (typeof target === 'number' && !isNaN(target)) return true

  return false
}
