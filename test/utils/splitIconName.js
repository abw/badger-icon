import { test, expect } from 'vitest'
import { splitIconName } from '@/lib/index.js'

test(
  'splitIconName() with empty string',
  () => expect(
    splitIconName('')
  ).toEqual({
    dashes: [ ],
    classes: [ ],
    style: { }
  })
)

test(
  'splitIconName() with plain name',
  () => expect(
    splitIconName('foo')
  ).toEqual({
    dashes: ['foo'],
    classes: [ ],
    style: { }
  })
)

test(
  'splitIconName() with multiple dashes',
  () => expect(
    splitIconName('foo-bar-baz')
  ).toEqual({
    dashes: ['foo', 'bar', 'baz'],
    classes: [ ],
    style: { }
  })
)

test(
  'splitIconName() with multiple dashes and values',
  () => expect(
    splitIconName('foo-bar-baz-stroke:3-fill=#ff7f00-grow=4')
  ).toEqual({
    dashes: ['foo', 'bar', 'baz', 'stroke:3', 'fill=#ff7f00', 'grow=4'],
    classes: [ ],
    style: { }
  })
)

test(
  'splitIconName() with negative values',
  () => expect(
    splitIconName('foo-x=-4-rotate:-90')
  ).toEqual({
    dashes: ['foo', 'x=-4', 'rotate:-90'],
    classes: [ ],
    style: { }
  })
)

test(
  'splitIconName() with floats',
  () => expect(
    splitIconName('foo-strokewidth:0.5')
  ).toEqual({
    dashes: ['foo', 'strokewidth:0.5'],
    classes: [ ],
    style: { }
  })
)

test(
  'splitIconName() with multiple classes',
  () => expect(
    splitIconName('foo.bar.baz')
  ).toEqual({
    dashes: ['foo'],
    classes: ['bar', 'baz'],
    style: { }
  })
)

test(
  'splitIconName() with multiple dashes and classes',
  () => expect(
    splitIconName('foo-bar-baz.wam.bam')
  ).toEqual({
    dashes: ['foo', 'bar', 'baz'],
    classes: ['wam', 'bam'],
    style: { }
  })
)

test(
  'splitIconName() with single parameter',
  () => expect(
    splitIconName('foo?a=1')
  ).toEqual({
    dashes: ['foo'],
    classes: [ ],
    style: { a: '1' }
  })
)

test(
  'splitIconName() with multiple parameters',
  () => expect(
    splitIconName('foo?a=1&b=2&c=3')
  ).toEqual({
    dashes: ['foo'],
    classes: [ ],
    style: { a: '1', b: '2', c: '3' }
  })
)

test(
  'splitIconName() with multiple colon/semi-colon parameters',
  () => expect(
    splitIconName('foo?a:one;b=two;c=three')
  ).toEqual({
    dashes: ['foo'],
    classes: [ ],
    style: { a: 'one', b: 'two', c: 'three' }
  })
)

test(
  'splitIconName() with unvalued parameters should be true',
  () => expect(
    splitIconName('foo?flipX;flipY')
  ).toEqual({
    dashes: ['foo'],
    classes: [ ],
    style: { flipX: true, flipY: true }
  })
)
