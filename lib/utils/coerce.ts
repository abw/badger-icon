import { isString } from '@abw/badger-utils'

export const asFloat = (n: string | number): number =>
  isString(n)
    ? parseFloat(n as string)
    : (n as number)

export const asInt = (n: string | number): number =>
  isString(n)
    ? parseInt(n as string)
    : (n as number)
