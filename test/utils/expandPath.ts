import { test, expect } from 'vitest'
import { expandPath } from '@/lib/utils/index'

test(
  'expandPath("foo:bar")',
  () => expect(
    expandPath('foo:bar')
  ).toEqual({
    type: 'foo',
    path: 'bar'
  })
)

test(
  'expandPath("foo-bar")',
  () => expect(
    expandPath('foo-bar')
  ).toEqual({
    path: 'foo-bar'
  })
)
