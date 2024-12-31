import { splitList } from '@abw/badger-utils'

export const splitSpace = (value: string) =>
  splitList(value, /\s+/)
