import { test, expect } from 'vitest'
import { resolveIconName } from '@/lib/utils/index'
import { IconSources } from '@/lib/types'

const iconData : IconSources = {
  'foo-bar-baz':  'fbb',
  'foo-bar':      'fb',
  'foo':          'f',
}

test(
  'resolveIconName() with empty string',
  () => expect(
    resolveIconName([], iconData)
  ).toEqual(
    null
  )
)

test(
  'resolveIconName() with one part',
  () => expect(
    resolveIconName(['foo'], iconData)
  ).toEqual([
    'foo', [], 'f'
  ])
)

test(
  'resolveIconName() with one part and two dashes',
  () => expect(
    resolveIconName(['foo', 'wam', 'bam'], iconData)
  ).toEqual([
    'foo',
    ['wam', 'bam'],
    'f'
  ])
)

test(
  'resolveIconName() with two parts',
  () => expect(
    resolveIconName(['foo', 'bar'], iconData)
  ).toEqual([
    'foo-bar',
    [ ],
    'fb'
  ])
)

test(
  'resolveIconName() with two parts and two dashes',
  () => expect(
    resolveIconName(['foo', 'bar', 'wam', 'bam'], iconData)
  ).toEqual([
    'foo-bar',
    ['wam', 'bam'],
    'fb'
  ])
)

test(
  'resolveIconName() with three parts',
  () => expect(
    resolveIconName(['foo', 'bar', 'baz'], iconData)
  ).toEqual([
    'foo-bar-baz',
    [ ],
    'fbb'
  ])
)

test(
  'resolveIconName() with three parts and two dashes',
  () => expect(
    resolveIconName(['foo', 'bar', 'baz', 'wam', 'bam'], iconData)
  ).toEqual([
    'foo-bar-baz',
    ['wam', 'bam'],
    'fbb'
  ])
)

test(
  'resolveIconName() with three parts and dashed params',
  () => expect(
    resolveIconName(['foo', 'bar', 'baz', 'wam=10', 'bam=20'], iconData)
  ).toEqual([
    'foo-bar-baz',
    ['wam=10', 'bam=20'],
    'fbb'
  ])
)

test(
  'resolveIconName() with three parts and floating point params',
  () => expect(
    resolveIconName(['foo', 'bar', 'baz', 'wam=1.2', 'bam=2.3'], iconData)
  ).toEqual([
    'foo-bar-baz',
    ['wam=1.2', 'bam=2.3'],
    'fbb'
  ])
)

test(
  'resolveIconName() with three parts and floating point params then classes',
  () => expect(
    resolveIconName(['foo', 'bar', 'baz', 'wam=1.2', 'bam=2.3'], iconData)
  ).toEqual([
    'foo-bar-baz',
    ['wam=1.2', 'bam=2.3'],
    'fbb'
  ])
)
