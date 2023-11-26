import { test, expect } from 'vitest'
import { expandIconData } from '@/lib/index.js'

const SVG = '<b>some SVG</b>'
const PATH_DATA = 'M100,200L300,400'
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
  defaults
}

test(
  'expandIconData() with SVG string',
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
  'expandIconData() with path data',
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
  'expandIconData() with path body object',
  () => expect(
    expandIconData(PATH_BODY, Library)
  ).toEqual({
    ...defaults,
    body: PATH_BODY
  })
)

test(
  'expandIconData() with polyline body object',
  () => expect(
    expandIconData(POLYLINE_BODY, Library)
  ).toEqual({
    ...defaults,
    body: POLYLINE_BODY
  })
)

test(
  'expandIconData() with array',
  () => expect(
    expandIconData(ARRAY_BODY, Library)
  ).toEqual({
    ...defaults,
    body: {
      element: 'array',
      items: [
        {
          ...defaults,
          body: {
            element: 'svg',
            svg: SVG
          }
        },
        {
          ...defaults,
          body: PATH_BODY,
        },
        {
          ...defaults,
          body: PATH_BODY
        },
        {
          ...defaults,
          body: POLYLINE_BODY
        },
      ]
    }
  })
)
