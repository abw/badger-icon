import { fail, isString } from '@abw/badger-utils'
import { parseAttrs } from './attrs.js'

// Derived from the transform code from FontAwesome:
// https://github.com/FortAwesome/Font-Awesome/blob/6.x/js-packages/%40fortawesome/fontawesome-svg-core/index.js#L2706

export const nullTransform = {
  x:      0,
  y:      0,
  size:   16,
  flipX:  false,
  flipY:  false,
  rotate: 0
}

export const transformFunctions = {
  flip: (transform, v) => {
    if (isString(v) && v.match(/^y$/i)) {
      transform.flipY = ! transform.flipY
    }
    else {
      transform.flipX = ! transform.flipX
    }
  },

  flipx: transform =>
    transform.flipX = ! transform.flipX,

  flipy: transform =>
    transform.flipY = ! transform.flipY,

  grow: (transform, n) =>
    transform.size += parseFloat(n),

  shrink: (transform, n) =>
    transform.size -= parseFloat(n),

  left: (transform, n) =>
    n === true
      ? transform.rotate -= 90
      : transform.x -= parseFloat(n),

  right: (transform, n) =>
    n === true
      ? transform.rotate += 90
      : transform.x += parseFloat(n),

  up: (transform, n) =>
    n === true
      ? transform.rotate += 0
      : transform.y -= parseFloat(n),

  down: (transform, n) =>
    n === true
      ? transform.rotate += 180
      : transform.y += parseFloat(n),

  rotate: (transform, n) =>
    transform.rotate += parseInt(n)
}
transformFunctions['flop']   = transformFunctions.flipy
transformFunctions['flip-x'] = transformFunctions.flipx
transformFunctions['flip-y'] = transformFunctions.flipy

export function transformData(
  transform,
  target={ ...nullTransform }
) {
  const attrs = isString(transform)
    ? parseAttrs(transform)
    : (transform || { })

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

