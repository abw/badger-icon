import { test, expect } from 'vitest'
import { expandPoints } from '@/lib/utils/index'

test(
  'expandPoints() with names string',
  () => expect(
    expandPoints('10 20 30', 'a b c')
  ).toEqual({
    a: "10",
    b: "20",
    c: "30"
  })
)

test(
  'expandPoints() with names array',
  () => expect(
    expandPoints('10 20 30', ['a', 'b', 'c'])
  ).toEqual({
    a: "10",
    b: "20",
    c: "30"
  })
)
