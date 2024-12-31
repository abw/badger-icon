import { test, expect } from 'vitest'
import { iconArrayBody } from '@/lib/utils/index'

const SVG = '<b>some SVG</b>'
const PATH_DATA = 'M100,200L300,400'

test(
  'array with SVG element and circle string',
  () => expect(
    iconArrayBody([
      {
        element: 'svg',
        svg: SVG
      },
      'circle:10 20 30'
    ])
  ).toEqual({
    element: 'array',
    items: [
      {
        element: 'svg',
        svg: SVG
      },
      {
        element: 'circle',
        cx: '10',
        cy: '20',
        r: '30'
      }
    ]
  })
)

test(
  'array with path data and circle string',
  () => expect(
    iconArrayBody([
      PATH_DATA,
      'circle:10 20 30'
    ])
  ).toEqual({
    element: 'array',
    items: [
      {
        element: 'path',
        d: PATH_DATA,
      },
      {
        element: 'circle',
        cx: '10',
        cy: '20',
        r: '30'
      }
    ]
  })
)
