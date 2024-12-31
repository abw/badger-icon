import { test, expect } from 'vitest'
import { IconLibrary } from '@/lib/types'
import {
  resolveIconData,
} from '@/lib/index'

const iconData: IconLibrary = {
  defaults: {
    width: 42,
    height: 43,
  },
  icons: {
    'foo-bar-baz':  'simple path',
  }
}

test(
  'defaults with simple string path',
  () => expect(
    resolveIconData('foo-bar-baz', iconData)
  ).toEqual({
    name:   'foo-bar-baz',
    width:  42,
    height: 43,
    body: {
      element: 'path',
      d: 'simple path',
    },
    style: {
      fill: 'currentColor'
    }
  })
)
