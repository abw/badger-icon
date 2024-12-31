import { test, expect } from 'vitest'
import { iconObjectBody } from '@/lib/utils/index'

const SVG = '<b>some SVG</b>'
const PATH_DATA = 'M100,200L300,400'
const POINTS = '100,200 300,400 500,600'

test(
  'SVG element',
  () => expect(
    iconObjectBody({
      element: 'svg',
      svg: SVG
    })
  ).toEqual({
    element: 'svg',
    svg: SVG
  })
)

test(
  'SVG property',
  () => expect(
    iconObjectBody({
      svg: SVG
    })
  ).toEqual({
    element: 'svg',
    svg: SVG
  })
)

test(
  'path property',
  () => expect(
    iconObjectBody({
      path: PATH_DATA
    })
  ).toEqual({
    element: 'path',
    d: PATH_DATA
  })
)

test(
  'polygon property',
  () => expect(
    iconObjectBody({
      polygon: POINTS
    })
  ).toEqual({
    element: 'polygon',
    points: POINTS
  })
)
