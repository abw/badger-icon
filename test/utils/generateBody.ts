import { test, expect } from 'vitest'
import { generateBody } from '@/lib/utils/index'

const SVG = '<b>some SVG</b>'
const PATH_DATA = 'M100,200L300,400'
const POINTS = '100,200 300,400 500,600'

test(
  'svg',
  () => expect(
    generateBody('svg', SVG)
  ).toEqual({
    element: 'svg',
    svg: SVG
  })
)

test(
  'path',
  () => expect(
    generateBody('path', PATH_DATA)
  ).toEqual({
    element: 'path',
    d: PATH_DATA
  })
)

test(
  'polygon',
  () => expect(
    generateBody('polygon', POINTS)
  ).toEqual({
    element: 'polygon',
    points: POINTS
  })
)

test(
  'polyline',
  () => expect(
    generateBody('polyline', POINTS)
  ).toEqual({
    element: 'polyline',
    points: POINTS
  })
)

test(
  'circle',
  () => expect(
    generateBody('circle', '10 20 30')
  ).toEqual({
    element: 'circle',
    cx: '10',
    cy: '20',
    r: '30',
  })
)

test(
  'ellipse',
  () => expect(
    generateBody('ellipse', '10 20 30 40')
  ).toEqual({
    element: 'ellipse',
    cx: '10',
    cy: '20',
    rx: '30',
    ry: '40',
  })
)

test(
  'line',
  () => expect(
    generateBody('line', '10 20 30 40')
  ).toEqual({
    element: 'line',
    x1: '10',
    y1: '20',
    x2: '30',
    y2: '40',
  })
)

test(
  'rect',
  () => expect(
    generateBody('rect', '10 20 30 40')
  ).toEqual({
    element: 'rect',
    x: '10',
    y: '20',
    width: '30',
    height: '40',
  })
)

test(
  'rect with one radius',
  () => expect(
    generateBody('rect', '10 20 30 40 5')
  ).toEqual({
    element: 'rect',
    x: '10',
    y: '20',
    width: '30',
    height: '40',
    rx: '5'
  })
)

test(
  'rect with two radii',
  () => expect(
    generateBody('rect', '10 20 30 40 5 6')
  ).toEqual({
    element: 'rect',
    x: '10',
    y: '20',
    width: '30',
    height: '40',
    rx: '5',
    ry: '6'
  })
)

