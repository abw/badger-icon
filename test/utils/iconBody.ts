import { test, expect } from 'vitest'
import { iconBody } from '@/lib/utils/index'

const SVG = '<b>some SVG</b>'
const PATH_DATA = 'M100,200L300,400'
const POINTS = '100,200 300,400 500,600'

test(
  'SVG element',
  () => expect(
    iconBody(
      {
        width:  100,
        height: 100,
        type: 'fill',
      },
      {
        element: 'svg',
        svg: SVG
      }
    )
  ).toEqual({
    width:  100,
    height: 100,
    type: 'fill',
    body: {
      element: 'svg',
      svg: SVG
    }
  })
)

test(
  'SVG string',
  () => expect(
    iconBody(
      {
        width:  100,
        height: 100,
        type: 'fill'
      },
      SVG
    )
  ).toEqual({
    width:  100,
    height: 100,
    type: 'fill',
    body: {
      element: 'svg',
      svg: SVG
    }
  })
)

test(
  'path property',
  () => expect(
    iconBody(
      {
        width:  100,
        height: 100,
        type: 'fill'
      },
      {
        path: PATH_DATA
      }
    )
  ).toEqual({
    width:  100,
    height: 100,
    type: 'fill',
    body: {
      element: 'path',
      d: PATH_DATA
    }
  })
)

test(
  'polygon and polyline array',
  () => expect(
    iconBody(
      {
        width:  100,
        height: 100,
        type: 'fill'
      },
      [
        `polyline:${POINTS}`,
        `polygon:${POINTS}`,
      ]
    )
  ).toEqual({
    width:  100,
    height: 100,
    type: 'fill',
    body: {
      element: 'array',
      items: [
        {
          element: 'polyline',
          points: POINTS
        },
        {
          element: 'polygon',
          points: POINTS
        },
      ]
    }
  })
)

test(
  'array with mixed types',
  () => expect(
    iconBody(
      {
        width:  100,
        height: 100,
        type: 'fill'
      },
      [
        `polyline:${POINTS}`,
        { polygon: POINTS },
        [
          'circle:10 20 30',
          [ 'rect:1 2 3 4' ]
        ]
      ]
    )
  ).toEqual({
    width:  100,
    height: 100,
    type: 'fill',
    body: {
      element: 'array',
      items: [
        {
          element: 'polyline',
          points: POINTS
        },
        {
          element: 'polygon',
          points: POINTS
        },
        {
          element: 'circle',
          cx: "10",
          cy: "20",
          r: "30"
        },
        {
          element: 'rect',
          x: "1",
          y: "2",
          width: "3",
          height: "4"
        },
      ]
    }
  })
)

test(
  'explicit body',
  () => expect(
    iconBody(
      {
        width:  100,
        height: 100,
        type: 'fill'
      },
      {
        body: PATH_DATA,
        width: 128,
        height: 132
      }
    )
  ).toEqual({
    width:  128,
    height: 132,
    type: 'fill',
    body: {
      element: 'path',
      d: PATH_DATA
    }
  })
)

/*
// TODO
/*
test(
  'explicit body',
  () => expect(
    iconBody({
      body: `polygon:${POINTS}`,
      width: 32,
      height: 32,
    })
  ).toEqual({
    element: 'polygon',
    points: POINTS
  })
)
*/