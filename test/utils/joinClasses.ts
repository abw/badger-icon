import { test, expect } from 'vitest'
import { joinClasses } from '@/lib/utils/index'

test(
  'joinClasses() should ignore undefined values',
  () => expect(
    joinClasses([undefined, 'foo'])
  ).toBe(
    'foo'
  )
)
test(
  'joinClasses should ignore null values',
  () => expect(
    joinClasses(['foo', null, 'bar'])
  ).toBe(
    'foo bar'
  )
)

