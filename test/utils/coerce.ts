import { test, expect } from 'vitest'
import { asFloat, asInt } from '@/lib/index'

test(
  'asFloat(float)',
  () => expect(
    asFloat(1.23)
  ).toBe(
    1.23
  )
)

test(
  'asFloat(string)',
  () => expect(
    asFloat("1.23")
  ).toBe(
    1.23
  )
)

test(
  'asInt(int)',
  () => expect(
    asFloat(123)
  ).toBe(
    123
  )
)

test(
  'asInt(string)',
  () => expect(
    asInt("123")
  ).toBe(
    123
  )
)
