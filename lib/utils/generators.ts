import { expandPoints } from './expand.js'
import { BodyGenerators, IconBody } from '../types.js'
import {
  PATH, POLYLINE, POLYGON, SVG, ARRAY, CIRCLE, ELLIPSE, LINE, RECT,
} from '../constants.js'
import { fail } from '@abw/badger-utils'

export const iconBodyGenerators: BodyGenerators = {
  svg: svg => ({
    element: SVG,
    svg
  }),
  array: items => ({
    element: ARRAY,
    items
  }),
  path: d => ({
    element: PATH,
    d
  }),
  polygon: points => ({
    element: POLYGON,
    points
  }),
  polyline: points => ({
    element: POLYLINE,
    points
  }),
  circle: points => ({
    element: CIRCLE,
    ...expandPoints(points, 'cx cy r')
  }),
  ellipse: points => ({
    element: ELLIPSE,
    ...expandPoints(points, 'cx cy rx ry')
  }),
  line: points => ({
    element: LINE,
    ...expandPoints(points, 'x1 y1 x2 y2')
  }),
  rect: points => ({
    element: RECT,
    ...expandPoints(points, 'x y width height rx ry')
  }),
}

/**
 * Generate the icon body data for an `element` type using the compressed
 * `data` string.
 * @example
 * generateBody('path', 'M1,2L3,4)
 *   // => { element: 'path', d: 'M1,2L3,4'}
 * generateBody('circle', '10 20 30)
 *   // => { element: 'circle', cx: '10', cy: '20', r: '30' }
 */

export function generateBody(
  element: string,
  data: string
): IconBody {
  const generator = iconBodyGenerators[element]
    || fail(`Invalid icon data element: ${element}`)
  return generator(data)
}

