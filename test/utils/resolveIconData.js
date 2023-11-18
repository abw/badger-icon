import { test, expect } from 'vitest'
import {
  resolveIconData, DEFAULT_ICON_WIDTH, DEFAULT_ICON_HEIGHT,
  nullTransform
} from '@/lib/index.js'

const iconData = {
  icons: {
    'foo-bar-baz':  'simple path',
    'foo-bar':      { path: 'nested path' },
    'foo':          { path: 'another path', width: 524 },
    'wiz':          { path: 'yet another path', width: 32, height: 24 },
    'woz':          { path: 'transformed path', transform: 'rotate:45;grow=4' },
    'waz':          { path: 'waz path', transform: { rotate: 90, shrink: 2, right: 3 } },
    'flim':         { path: 'flim path', style: 'fill:red;stroke-width:99' },
    'flam':         { path: 'flam path', style: { fill: 'blue', 'stroke-width': 24 } },
    'wam':          { path: 'wam path', style: 'stroke-width:24' },
    'bam':          { path: 'bam path', style: { 'stroke-width': 24 } },
  }
}

test(
  'resolveIconData() with simple string path',
  () => expect(
    resolveIconData('foo-bar-baz', iconData)
  ).toEqual({
    name:   'foo-bar-baz',
    path:   'simple path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'currentColor'
    }
  })
)

test(
  'resolveIconData() with simple string path and dashes',
  () => expect(
    resolveIconData('foo-bar-baz-flipx', iconData)
  ).toEqual({
    name:   'foo-bar-baz',
    path:   'simple path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    transform: {
      ...nullTransform,
      flipX: true
    },
    style: {
      fill: 'currentColor'
    }
  })
)

test(
  'resolveIconData() with simple string path, dashes and classes',
  () => expect(
    resolveIconData('foo-bar-baz-right=4.wibble.frusset.pouch', iconData)
  ).toEqual({
    name:   'foo-bar-baz',
    path:   'simple path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    className: 'wibble frusset pouch',
    transform: {
      ...nullTransform,
      x: 4
    },
    style: {
      fill: 'currentColor'
    }
  })
)

test(
  'resolveIconData() with nested path',
  () => expect(
    resolveIconData('foo-bar', iconData)
  ).toEqual({
    name:   'foo-bar',
    path:   'nested path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'currentColor'
    }
  })
)

test(
  'resolveIconData() with nested path and classes',
  () => expect(
    resolveIconData('foo-bar.wig.wam', iconData)
  ).toEqual({
    name:       'foo-bar',
    path:       'nested path',
    width:      DEFAULT_ICON_WIDTH,
    height:     DEFAULT_ICON_HEIGHT,
    className:  'wig wam',
    style: {
      fill: 'currentColor'
    }
  })
)

test(
  'resolveIconData() with custom width',
  () => expect(
    resolveIconData('foo', iconData)
  ).toEqual({
    name:   'foo',
    path:   'another path',
    width:  524,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'currentColor'
    }
  })
)

test(
  'resolveIconData() with custom width and height',
  () => expect(
    resolveIconData('wiz', iconData)
  ).toEqual({
    name:   'wiz',
    path:   'yet another path',
    width:  32,
    height: 24,
    style: {
      fill: 'currentColor'
    }
  })
)

test(
  'resolveIconData() with transform',
  () => expect(
    resolveIconData('woz', iconData)
  ).toEqual({
    name:   'woz',
    path:   'transformed path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'currentColor'
    },
    transform: {
      x:      0,
      y:      0,
      size:   20,
      flipX:  false,
      flipY:  false,
      rotate: 45
    }
  })
)

test(
  'resolveIconData() with transform object',
  () => expect(
    resolveIconData('waz', iconData)
  ).toEqual({
    name:   'waz',
    path:   'waz path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'currentColor'
    },
    transform: {
      x:      3,
      y:      0,
      size:   14,
      flipX:  false,
      flipY:  false,
      rotate: 90
    }
  })
)

test(
  'resolveIconData() with style',
  () => expect(
    resolveIconData('flim', iconData)
  ).toEqual({
    name:   'flim',
    path:   'flim path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'red',
      'stroke-width': '99'
    }
  })
)

test(
  'resolveIconData() with style object',
  () => expect(
    resolveIconData('flam', iconData)
  ).toEqual({
    name:   'flam',
    path:   'flam path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'blue',
      'stroke-width': 24
    }
  })
)

test(
  'resolveIconData() with style string and default type',
  () => expect(
    resolveIconData('wam', iconData)
  ).toEqual({
    name:   'wam',
    path:   'wam path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'currentColor',
      'stroke-width': '24'
    }
  })
)

test(
  'resolveIconData() with style object and default type',
  () => expect(
    resolveIconData('bam', iconData)
  ).toEqual({
    name:   'bam',
    path:   'bam path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'currentColor',
      'stroke-width': 24
    }
  })
)

test(
  'resolveIconData() with style object and additional styles',
  () => expect(
    resolveIconData('flam?fill=orange&stroke-linecap=butt', iconData)
  ).toEqual({
    name:   'flam',
    path:   'flam path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'orange',
      'stroke-width': 24,
      'stroke-linecap': 'butt'
    }
  })
)

test(
  'resolveIconData() should not modify original icon data',
  () => expect(
    resolveIconData('flam', iconData)
  ).toEqual({
    name:   'flam',
    path:   'flam path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'blue',
      'stroke-width': 24,
    }
  })
)

test(
  'resolveIconData() simple string path with additional styles',
  () => expect(
    resolveIconData('foo-bar-baz?fill=red;stroke-width=4', iconData)
  ).toEqual({
    name:   'foo-bar-baz',
    path:   'simple path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'red',
      'stroke-width': '4'
    }
  })
)

test(
  'resolveIconData() path with -right=4 to move',
  () => expect(
    resolveIconData('foo-bar-right=4', iconData)
  ).toEqual({
    name:   'foo-bar',
    path:   'nested path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'currentColor'
    },
    transform: {
      ...nullTransform,
      x: 4
    }
  })
)

test(
  'resolveIconData() path with -right to rotate',
  () => expect(
    resolveIconData('foo-bar-right', iconData)
  ).toEqual({
    name:   'foo-bar',
    path:   'nested path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'currentColor'
    },
    transform: {
      ...nullTransform,
      rotate: 90
    }
  })
)

test(
  'resolveIconData() path with -right to rotate and -right:4 to move',
  () => expect(
    resolveIconData('foo-bar-right-right:4', iconData)
  ).toEqual({
    name:   'foo-bar',
    path:   'nested path',
    width:  DEFAULT_ICON_WIDTH,
    height: DEFAULT_ICON_HEIGHT,
    style: {
      fill: 'currentColor'
    },
    transform: {
      ...nullTransform,
      x: 4,
      rotate: 90
    }
  })
)

test(
  'resolveIconData() with missing icon',
  () => expect(
    () => resolveIconData('no-such-icon', iconData)
  ).toThrowError(
    /^No icon found matching any leading subset of no-such-icon$/
  )
)

test(
  'resolveIconData() with missing icon and query',
  () => expect(
    () => resolveIconData('no-such-icon?foo=bar&baz', iconData)
  ).toThrowError(
    /^No icon found matching any leading subset of no-such-icon$/
  )
)
