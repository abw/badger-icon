import { test, expect } from 'vitest'
import { resolveIconName } from '@/lib/index.js'

const iconData = {
  'foo-bar-baz':  true,
  'foo-bar':      true,
  'foo':          true,
}

test(
  'resolveIconName() with empty string',
  () => expect(
    resolveIconName('', iconData)
  ).toEqual({
    dashes: [ ],
    classes: [ ],
    style: { }
  })
)

test(
  'resolveIconName() with one part',
  () => expect(
    resolveIconName('foo', iconData)
  ).toEqual({
    name:     'foo',
    dashes:   [ ],
    classes:  [ ],
    style:    { }
  })
)

test(
  'resolveIconName() with one part and two dashes',
  () => expect(
    resolveIconName('foo-wam-bam', iconData)
  ).toEqual({
    name:     'foo',
    dashes:   ['wam', 'bam'],
    classes:  [ ],
    style:    { }
  })
)

test(
  'resolveIconName() with two parts',
  () => expect(
    resolveIconName('foo-bar', iconData)
  ).toEqual({
    name:     'foo-bar',
    dashes:   [ ],
    classes:  [ ],
    style:    { }
  })
)

test(
  'resolveIconName() with two parts and two dashes',
  () => expect(
    resolveIconName('foo-bar-wam-bam', iconData)
  ).toEqual({
    name:     'foo-bar',
    dashes:   ['wam', 'bam'],
    classes:  [ ],
    style:    { }
  })
)

test(
  'resolveIconName() with three parts',
  () => expect(
    resolveIconName('foo-bar-baz', iconData)
  ).toEqual({
    name:     'foo-bar-baz',
    dashes:   [ ],
    classes:  [ ],
    style:    { }
  })
)

test(
  'resolveIconName() with three parts and two dashes',
  () => expect(
    resolveIconName('foo-bar-baz-wam-bam', iconData)
  ).toEqual({
    name:     'foo-bar-baz',
    dashes:   ['wam', 'bam'],
    classes:  [ ],
    style:    { }
  })
)
