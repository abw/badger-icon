import { isFunction, splitList } from '@abw/badger-utils'

export const maybeFunction = (fn, ...args) =>
  isFunction(fn)
    ? fn(...args)
    : fn

export const splitSpace = value =>
  splitList(value, /\s+/)
