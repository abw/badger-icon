import { isFunction } from '@abw/badger-utils'

export const maybeFunction = (fn, ...args) =>
  isFunction(fn)
    ? fn(...args)
    : fn