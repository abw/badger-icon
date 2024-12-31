import { fail, isString } from '@abw/badger-utils'
import { parseAttrs } from './attrs.js'
import { TransformFunctions, TransformObject } from '../types'

// Derived from the transform code from FontAwesome:
// https://github.com/FortAwesome/Font-Awesome/blob/6.x/js-packages/%40fortawesome/fontawesome-svg-core/index.js#L2706

export const asFloat = (n: string | number): number =>
  isString(n)
    ? parseFloat(n as string)
    : (n as number)

export const asInt = (n: string | number): number =>
  isString(n)
    ? parseInt(n as string)
    : (n as number)


export const nullTransform: TransformObject = {
  x:      0,
  y:      0,
  size:   16,
  scaleX: 1,
  scaleY: 1,
  flipX:  false,
  flipY:  false,
  rotate: 0
}

export const transformFunctions: TransformFunctions = {
  flip: (transform: TransformObject, v: string | boolean) => {
    if (isString(v) && (v as string).match(/^y$/i)) {
      transform.flipY = ! transform.flipY
    }
    else {
      transform.flipX = ! transform.flipX
    }
  },

  flipx: (transform: TransformObject) =>
    transform.flipX = ! transform.flipX,

  flipy: (transform: TransformObject) =>
    transform.flipY = ! transform.flipY,

  grow: (transform: TransformObject, n: number | string) =>
    transform.size += asFloat(n),

  shrink: (transform: TransformObject, n: number | string) =>
    transform.size -= asFloat(n),

  scalex: (transform: TransformObject, n: number | string) =>
    transform.scaleX *= asFloat(n),

  scaley: (transform: TransformObject, n: number | string) =>
    transform.scaleY *= asFloat(n),

  left: (transform: TransformObject, n: number | string | boolean) =>
    n === true
      ? transform.rotate -= 90
      : transform.x -= asFloat(n as string | number),

  right: (transform: TransformObject, n: number | string | boolean) =>
    n === true
      ? transform.rotate += 90
      : transform.x += asFloat(n as string | number),

  up: (transform: TransformObject, n: number | string | boolean) =>
    n === true
      ? transform.rotate += 0
      : transform.y -= asFloat(n as string | number),

  down: (transform: TransformObject, n: number | string | boolean) =>
    n === true
      ? transform.rotate += 180
      : transform.y += asFloat(n as string | number),

  rotate: (transform: TransformObject, n: number | string) =>
    transform.rotate += asInt(n)
}
transformFunctions['flop']   = transformFunctions.flipy
transformFunctions['flip-x'] = transformFunctions.flipx
transformFunctions['flip-y'] = transformFunctions.flipy

export function transformData(
  transform: string | TransformObject,
  target={ ...nullTransform }
) {
  const attrs = isString(transform)
    ? parseAttrs(transform as string)
    : (transform || { }) as TransformObject

  return Object.entries(attrs).reduce(
    (transform, [name, value]) => {
      const lcname = name.toLowerCase()
      const transformer = transformFunctions[lcname]
        || fail(`Invalid transform: ${lcname}`)
      transformer(transform, value)
      return transform
    },
    target
  )
}

