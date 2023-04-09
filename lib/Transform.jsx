import React from 'react'

export function Transform({icon, transform, children}) {
  const { width, height } = icon
  const halfw = width / 2
  const halfh = height / 2
  const trans = parseTransform(transform)
  const tx    = trans.x * width  / 16
  const ty    = trans.y * height / 16
  const sx    = trans.size / 16 * (trans.flipX ? -1 : 1)
  const sy    = trans.size / 16 * (trans.flipY ? -1 : 1)
  const rt    = trans.rotate
  /*
  if (transform) {
    console.log('transform: ', transform);
    console.log('trans: ', trans);
    console.log(`tx:${tx}  ty:${ty}  sx:${sx}  sx:${sx}  rt:${rt}`);
  }
  */

  return (
    <g transform={`translate(${halfw} ${halfh})`}>
      <g transform={`translate(${tx}, ${ty}) scale(${sx}, ${sy}) rotate(${rt} 0 0)`}>
        <g transform={`translate(-${halfw} -${halfh})`}>
          {children}
        </g>
      </g>
    </g>
  )
}

// Slightly modified version of:
// https://github.com/FortAwesome/Font-Awesome/blob/6.x/js-packages/%40fortawesome/fontawesome-svg-core/index.js#L2706
export function parseTransform(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  }
  return transformString.toLowerCase().split(' ').reduce(
    (acc, n) => {
      const parts = n.toLowerCase().split('-')
      const first = parts[0]
      const rest  = parts.slice(1).join('-')

      if (first && rest === 'h') {
        acc.flipX = true
        return acc
      }

      if (first && rest === 'v') {
        acc.flipY = true
        return acc
      }

      const num = parseFloat(rest)

      if (isNaN(num)) {
        return acc
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + num
          break

        case 'shrink':
          acc.size = acc.size - num
          break

        case 'left':
          acc.x = acc.x - num
          break

        case 'right':
          acc.x = acc.x + num
          break

        case 'up':
          acc.y = acc.y - num
          break

        case 'down':
          acc.y = acc.y + num
          break

        case 'rotate':
          acc.rotate = acc.rotate + num
          break
      }

      return acc
    },
    transform
  )
}
