import { test, expect } from 'vitest'
import {
  resolveIconData, DEFAULT_ICON_WIDTH, DEFAULT_ICON_HEIGHT
} from '@/lib/index.js'

const iconData = {
  'foo-bar-baz':  'simple path',
  'foo-bar':      { path: 'nested path' },
  'foo':          { path: 'another path', width: 524 },
  'wiz':          { path: 'yet another path', width: 32, height: 24 },
  'woz':          { path: 'transformed path', transform: 'rotate:45;grow=4' },
  'waz':          { path: 'waz path', transform: { rotate: 90, shrink: 2, right: 3 } },
  'flim':         { path: 'flim path', style: 'fill:red;stroke-width:99' },
  'flam':         { path: 'flam path', style: { fill: 'blue', 'stroke-width': 24 } },
}

test(
  'resolveIconData() with simple string path',
  () => expect(
    resolveIconData('foo-bar-baz', iconData)
  ).toEqual({
    name:    'foo-bar-baz',
    dashes:  [ ],
    classes: [ ],
    style:   { },
    icon: {
      path:   'simple path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
    },
  })
)

test(
  'resolveIconData() with simple string path and dashes',
  () => expect(
    resolveIconData('foo-bar-baz-wam-bam', iconData)
  ).toEqual({
    name:    'foo-bar-baz',
    dashes:  ['wam', 'bam'],
    classes: [ ],
    style:   { },
    icon: {
      path:   'simple path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
    },
  })
)

test(
  'resolveIconData() with simple string path, dashes and classes',
  () => expect(
    resolveIconData('foo-bar-baz-wam-bam.wibble.frusset.pouch', iconData)
  ).toEqual({
    name:    'foo-bar-baz',
    dashes:  ['wam', 'bam'],
    classes: ['wibble', 'frusset', 'pouch'],
    style:   { },
    icon: {
      path:   'simple path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
      className: 'wibble frusset pouch'
    },
  })
)

test(
  'resolveIconData() with nested path',
  () => expect(
    resolveIconData('foo-bar', iconData)
  ).toEqual({
    name:     'foo-bar',
    dashes:   [ ],
    classes:  [ ],
    style:    { },
    icon: {
      path:   'nested path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
    },
  })
)

test(
  'resolveIconData() with nested path and classes',
  () => expect(
    resolveIconData('foo-bar.wig.wam', iconData)
  ).toEqual({
    name:     'foo-bar',
    dashes:   [ ],
    classes:  ['wig', 'wam'],
    style:    { },
    icon: {
      path:   'nested path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
      className: 'wig wam'
    },
  })
)

test(
  'resolveIconData() with custom width',
  () => expect(
    resolveIconData('foo', iconData)
  ).toEqual({
    name:     'foo',
    dashes:   [ ],
    classes:  [ ],
    style:    { },
    icon: {
      path:   'another path',
      width:  524,
      height: DEFAULT_ICON_HEIGHT,
    },
  })
)

test(
  'resolveIconData() with custom width and height',
  () => expect(
    resolveIconData('wiz', iconData)
  ).toEqual({
    name:     'wiz',
    dashes:   [ ],
    classes:  [ ],
    style:    { },
    icon: {
      path:   'yet another path',
      width:  32,
      height: 24,
    },
  })
)

test(
  'resolveIconData() with transform',
  () => expect(
    resolveIconData('woz', iconData)
  ).toEqual({
    name:     'woz',
    dashes:   [ ],
    classes:  [ ],
    style:    { },
    icon: {
      path:   'transformed path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
      transform: {
        x:      0,
        y:      0,
        size:   20,
        flipX:  false,
        flipY:  false,
        rotate: 45
      }
    },
  })
)

test(
  'resolveIconData() with transform object',
  () => expect(
    resolveIconData('waz', iconData)
  ).toEqual({
    name:     'waz',
    dashes:   [ ],
    classes:  [ ],
    style:    { },
    icon: {
      path:   'waz path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
      transform: {
        x:      3,
        y:      0,
        size:   14,
        flipX:  false,
        flipY:  false,
        rotate: 90
      }
    },
  })
)

test(
  'resolveIconData() with style',
  () => expect(
    resolveIconData('flim', iconData)
  ).toEqual({
    name:     'flim',
    dashes:   [ ],
    classes:  [ ],
    style:    { },
    icon: {
      path:   'flim path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
      style: {
        fill: 'red',
        'stroke-width': '99'
      }
    },
  })
)

test(
  'resolveIconData() with style object',
  () => expect(
    resolveIconData('flam', iconData)
  ).toEqual({
    name:     'flam',
    dashes:   [ ],
    classes:  [ ],
    style:    { },
    icon: {
      path:   'flam path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
      style: {
        fill: 'blue',
        'stroke-width': 24
      }
    },
  })
)

test(
  'resolveIconData() with style object and additional styles',
  () => expect(
    resolveIconData('flam?fill=orange&stroke-linecap=butt', iconData)
  ).toEqual({
    name:     'flam',
    dashes:   [ ],
    classes:  [ ],
    style:    {
      fill: 'orange',
      'stroke-linecap': 'butt',
    },
    icon: {
      path:   'flam path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
      style: {
        fill: 'orange',
        'stroke-width': 24,
        'stroke-linecap': 'butt'
      }
    },
  })
)

test(
  'resolveIconData() should not modify original icon data',
  () => expect(
    resolveIconData('flam', iconData)
  ).toEqual({
    name:     'flam',
    dashes:   [ ],
    classes:  [ ],
    style:    { },
    icon: {
      path:   'flam path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
      style: {
        fill: 'blue',
        'stroke-width': 24,
      }
    },
  })
)

test(
  'resolveIconData() simple string path with additional styles',
  () => expect(
    resolveIconData('foo-bar-baz?fill=red;stroke-width=4', iconData)
  ).toEqual({
    name:    'foo-bar-baz',
    dashes:  [ ],
    classes: [ ],
    style:   {
      fill: 'red',
      'stroke-width': '4'
    },
    icon: {
      path:   'simple path',
      width:  DEFAULT_ICON_WIDTH,
      height: DEFAULT_ICON_HEIGHT,
      style: {
        fill: 'red',
        'stroke-width': '4'
      }
    },
  })
)
