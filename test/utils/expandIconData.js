import { test, expect } from 'vitest'
import { expandIconData } from '@/lib/index.js'

const SVG = '<b>some SVG</b>'
const PATH_DATA = 'M100,200L300,400'
const POINTS = '100,200 300,400 500,600'
const PATH_BODY = {
  element: 'path',
  d: PATH_DATA
}
const POLYLINE_BODY = {
  element: 'polyline',
  points: PATH_DATA
}
const ARRAY_BODY = [
  SVG,
  PATH_DATA,
  PATH_BODY,
  POLYLINE_BODY
]

const defaults = {
  width: 456,
  height: 789,
  type: 'fill'
}
const Library = {
  defaults,
  pathA:    'path:M100,200L300,400',
  polygonB: 'polygon:100,200 300,400'
}

test(
  'SVG string',
  () => expect(
    expandIconData(SVG, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'svg',
      svg: SVG
    }
  })
)

test(
  'explicit path string',
  () => expect(
    expandIconData(`path:${PATH_DATA}`, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'path',
      d: PATH_DATA
    }
  })
)

test(
  'implicit path string',
  () => expect(
    expandIconData(PATH_DATA, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'path',
      d: PATH_DATA
    }
  })
)

test(
  'polygon string',
  () => expect(
    expandIconData(`polygon:${POINTS}`, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'polygon',
      points: POINTS
    }
  })
)

test(
  'polygon point',
  () => expect(
    expandIconData({ polygon: POINTS }, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'polygon',
      points: POINTS
    }
  })
)

test(
  'polyline string',
  () => expect(
    expandIconData(`polyline:${POINTS}`, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'polyline',
      points: POINTS
    }
  })
)

test(
  'polyline points',
  () => expect(
    expandIconData({ polyline: POINTS }, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'polyline',
      points: POINTS
    }
  })
)

test(
  'circle string',
  () => expect(
    expandIconData(`circle:10 20 30`, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'circle',
      cx: '10',
      cy: '20',
      r: '30',
    }
  })
)


test(
  'path data',
  () => expect(
    expandIconData(PATH_DATA, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'path',
      d: PATH_DATA
    }
  })
)

test(
  'path body object',
  () => expect(
    expandIconData(PATH_BODY, Library)
  ).toEqual({
    ...defaults,
    body: PATH_BODY
  })
)

test(
  'polyline body object',
  () => expect(
    expandIconData(POLYLINE_BODY, Library)
  ).toEqual({
    ...defaults,
    body: POLYLINE_BODY
  })
)

test(
  'array',
  () => expect(
    expandIconData(ARRAY_BODY, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'array',
      items: [
        {
          element: 'svg',
          svg: SVG
        },
        PATH_BODY,
        PATH_BODY,
        POLYLINE_BODY
      ]
    }
  })
)

test(
  'polygon string with classes',
  () => expect(
    expandIconData(`polygon.foo.bar:${POINTS}`, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'polygon',
      points: POINTS,
      className: 'foo bar'
    }
  })
)

test(
  'polygon string with dashed modifiers',
  () => expect(
    expandIconData(`polygon-right-fill:${POINTS}`, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'polygon',
      points: POINTS,
      style: {
        fill: 'currentColor'
      },
      transform: {
        flipX: false,
        flipY: false,
        rotate: 90,
        size: 16,
        x: 0,
        y: 0
      }
    },
  })
)

test(
  'polygon string with dashed modifiers and classes',
  () => expect(
    expandIconData(`polygon-right-fill.foo.bar:${POINTS}`, Library)
  ).toEqual({
    ...defaults,
    body: {
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
        size: 16,
        x: 0,
        y: 0
      }
    },
  })
)
