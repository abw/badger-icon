import { test, expect } from 'vitest'
import { IconData, addIcon, addIcons } from '@/lib/index.js'

test(
  'addIcon() should add an icon',
  () => {
    addIcon('foo', 'M1,1L10,11')
    expect(
      IconData.icons.foo
    ).toBe(
      'M1,1L10,11'
    )
  }
)

test(
  'addIcons() should add multiple icons',
  () => {
    addIcons({
      bar: 'M2,3L12,13',
      baz: 'M3,4L13,14',
    })
    expect(
      IconData.icons.bar
    ).toBe(
      'M2,3L12,13'
    )
    expect(
      IconData.icons.baz
    ).toBe(
      'M3,4L13,14'
    )
  }
)

