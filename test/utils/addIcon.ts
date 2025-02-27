import { test, expect } from 'vitest'
import { Library, addIcon, addIcons } from '@/lib/index'

test(
  'addIcon() should add an icon',
  () => {
    addIcon('foo', 'M1,1L10,11')
    expect(
      Library.icons.foo
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
      Library.icons.bar
    ).toBe(
      'M2,3L12,13'
    )
    expect(
      Library.icons.baz
    ).toBe(
      'M3,4L13,14'
    )
  }
)

test(
  'addIcon() should add an icon with a type',
  () => {
    addIcon(
      'bar',
      { path: 'M1,1L10,11', type: 'fill' }
    )
    expect(
      Library.icons.bar
    ).toStrictEqual(
      { path: 'M1,1L10,11', type: 'fill' }
    )
  }
)
