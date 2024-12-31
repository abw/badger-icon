import { expect, test } from 'vitest'
import { setKeys } from '@/lib/utils/index'

test(
  'setKeys() should return keys that have truthy values',
  () => expect(
    setKeys({ a: 10, b: 20, c: null, d: undefined, e: false, w: true })
  ).toEqual(
    ['a', 'b', 'w']
  )
)
