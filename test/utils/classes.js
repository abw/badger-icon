import { test, expect } from 'vitest'
import { classes } from '@/lib/index.js'

test(
  'classes() should flatten array of class names',
  () => expect(
    classes(
      [undefined, 'foo'],
      ['bar', null],
      [undefined, 'baz', null],
    )
  ).toBe(
    'foo bar baz'
  )
)

test(
  'classes() should pass objects to setKeys',
  () => expect(
    classes(
      [undefined, 'alpha'],
      ['bravo', null],
      { charlie: null, whisky: true }
    )
  ).toBe(
    'alpha bravo whisky'
  )
)
