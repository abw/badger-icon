import { test, expect } from 'vitest'
import { iconStringBody } from '@/lib/utils/index'

const SVG = '<b>some SVG</b>'
const PATH_DATA = 'M100,200L300,400'
const POINTS = '100,200 300,400 500,600'

test(
  'SVG string',
  () => expect(
    iconStringBody(SVG)
  ).toEqual({
    element: 'svg',
    svg: SVG
  })
)

test(
  'SVG string with leading whitespace',
  () => expect(
    iconStringBody(`   \n   \n ${SVG}`)
  ).toEqual({
    element: 'svg',
    svg: SVG
  })
)

test(
  'explicit path string',
  () => expect(
    iconStringBody(`path:${PATH_DATA}`)
  ).toEqual({
    element: 'path',
    d: PATH_DATA
  })
)

test(
  'implicit path string',
  () => expect(
    iconStringBody(PATH_DATA)
  ).toEqual({
    element: 'path',
    d: PATH_DATA
  })
)

test(
  'polygon string',
  () => expect(
    iconStringBody(`polygon:${POINTS}`)
  ).toEqual({
    element: 'polygon',
    points: POINTS
  })
)

test(
  'polyline string',
  () => expect(
    iconStringBody(`polyline:${POINTS}`)
  ).toEqual({
    element: 'polyline',
    points: POINTS
  })
)

test(
  'circle string',
  () => expect(
    iconStringBody(`circle:10 20 30`)
  ).toEqual({
    element: 'circle',
    cx: '10',
    cy: '20',
    r: '30',
  })
)

test(
  'path data',
  () => expect(
    iconStringBody(PATH_DATA)
  ).toEqual({
    element: 'path',
    d: PATH_DATA
  })
)

test(
  'polygon string with classes',
  () => expect(
    iconStringBody(`polygon.foo.bar:${POINTS}`)
  ).toEqual({
    element: 'polygon',
    points: POINTS,
    className: 'foo bar'
  })
)

test(
  'polygon string with dashed modifiers',
  () => expect(
    iconStringBody(`polygon-right-fill:${POINTS}`)
  ).toEqual({
    element: 'polygon',
    points: POINTS,
    style: {
      fill: 'currentColor'
    },
    transform: {
      flipX: false,
      flipY: false,
      rotate: 90,
      scaleX: 1,
      scaleY: 1,
      size: 16,
      x: 0,
      y: 0
    }
  })
)

test(
  'polygon string with dashed modifiers and classes',
  () => expect(
    iconStringBody(`polygon-right-fill.foo.bar:${POINTS}`)
  ).toEqual({
    element: 'polygon',
    points: POINTS,
    className: 'foo bar',
    style: {
      fill: 'currentColor'
    },
    transform: {
      flipX: false,
      flipY: false,
      rotate: 90,
      scaleX: 1,
      scaleY: 1,
      size: 16,
      x: 0,
      y: 0
    }
  })
)
