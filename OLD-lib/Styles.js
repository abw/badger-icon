import { fail, isArray } from '@abw/badger-utils'

const baseWidth     = 16
const widthMultiple = n => `${baseWidth * n}px`

export const pathStyles = {
  default: {
    fill:               'none',
    stroke:             'currentColor',
    strokeWidth:        widthMultiple(3),
    strokeLinecap:      'round',
    strokeLinejoin:     'round',
    strokeMiterlimit:   '1.5'
  },
  line: {
    fill:               'none',
    stroke:             'currentColor',
  },
  fill: {
    fill:               'currentColor',
  },
  round: {
    strokeLinecap:      'round',
    strokeLinejoin:     'round',
    strokeMiterlimit:   '1.5'
  },
  square: {
    strokeLinecap:      'square',
    strokeLinejoin:     'miter',
    strokeMiterlimit:   '1.5'
  },
  butt: {
    strokeLinecap:      'butt',
  },
  bevel: {
    strokeLinejoin:     'bevel',
  },
  thinner: {
    strokeWidth:        widthMultiple(0.5),
  },
  thin: {
    strokeWidth:        widthMultiple(1),
  },
  light: {
    strokeWidth:        widthMultiple(2),
  },
  medium: {
    strokeWidth:        widthMultiple(3),
  },
  heavy: {
    strokeWidth:        widthMultiple(4),
  },
  thick: {
    strokeWidth:        widthMultiple(5),
  },
  thicker: {
    strokeWidth:        widthMultiple(6),
  },
}

export const pathStyle = (spec='') =>
  (isArray(spec) ? spec : spec.split('.'))
    .filter( a => a )
    .reduce(
      (styles, name) => {
        const style = name.match('=')
          ? pathStyleAttr(name)
          : pathStyles[name] || fail(`Invalid style: ${name}`)
        return { ...styles, ...style }
      },
      pathStyles.default
    )

export const pathStyleAttr = attr => {
  const [name, value] = attr.split('=')
  return { [name]: value }
}
export default pathStyle