import { test, expect } from 'vitest'
import { maybeFunction } from '@/lib/index.js'

test(
  'maybeFunction() should call function',
  () => expect(
    maybeFunction((a, b) => a + b, 10, 20)
  ).toBe(
    30
  )
)

test(
  'maybeFunction() should return non-function value',
  () => expect(
    maybeFunction('nope', 20, 30)
  ).toBe(
    'nope'
  )
)
