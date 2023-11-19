import { fail, isString } from '@abw/badger-utils'
import { parseAttrs } from './attrs.js'
import { CURRENT_COLOR, NONE } from '../constants.js'

// NOTE: A percentage value for stroke-width is always computed as a
// percentage of the normalized viewBox diagonal length.  The values
// used below are based on multiples of a single pixel in an SVG with a
// height/width of 16px, i.e. 1em.  So a stroke-width of 1 unit, should
// be 1/16th of the height or width.  Assuming a square icon, the diagonal
// would be 1.4142 x 16px = 22.627px.  So to get a stroke width equivalent
// to 1px we can express it as 1 / 22.627 = 4.42%

const baseWidth     = 4.42
const widthMultiple = n => `${baseWidth * n}%`

export const nullStyle = {
  // fill:               'currentColor',
  // stroke:             'currentColor',
  /*
  strokeWidth:        widthMultiple(2),
  strokeLinecap:      'round',
  strokeLinejoin:     'round',
  strokeMiterlimit:   '1.5'
  */
}

export const styles = {
  outline: {
    fill:   'none',
    stroke: 'currentColor',
    strokeWidth: widthMultiple(2),
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: '1.5'
  },
  solid: {
    fill:   'currentColor',
    stroke: 'none',
  },
  round: {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: '1.5'
  },
  square: {
    strokeLinecap: 'square',
    strokeLinejoin: 'miter',
    strokeMiterlimit: '1.5'
  },
  butt: {
    strokeLinecap: 'butt',
  },
  bevel: {
    strokeLinejoin: 'bevel',
  },
  thinnest: {
    strokeWidth: widthMultiple(0.5),
  },
  thinner: {
    strokeWidth: widthMultiple(1),
  },
  thin: {
    strokeWidth: widthMultiple(1.5),
  },
  medium: {
    strokeWidth: widthMultiple(2.0),
  },
  thick: {
    strokeWidth: widthMultiple(2.5),
  },
  thicker: {
    strokeWidth: widthMultiple(3),
  },
  thickest: {
    strokeWidth: widthMultiple(3.5),
  },
}
styles.line = styles.outline

export const styleFunctions = {
  ...Object.entries(styles).reduce(
    (fns, [name, styles]) => {
      fns[name] = style => Object.assign(style, styles)
      return fns
    },
    { }
  ),

  fill: (style, color) =>
    style.fill = color === true ? CURRENT_COLOR : color,

  stroke: (style, color) =>
    style.stroke = color === true ? CURRENT_COLOR : color,

  nofill: style =>
    style.fill = NONE,

  nostroke: style =>
    style.stroke = NONE,

  strokewidth: (style, width) =>
    style.strokeWidth = width.match(/^[\d.]+$/)
      ? widthMultiple(parseFloat(width))
      : width,

  opacity: (style, opacity) =>
    style.opacity = opacity,

  fillopacity: (style, opacity) =>
    style.fillOpacity = opacity,

  strokeopacity: (style, opacity) =>
    style.strokeOpacity = opacity
}

export function styleData(
  style,
  target={ ...nullStyle }
) {
  const attrs = isString(style)
    ? parseAttrs(style)
    : (style || { })

  return Object.entries(attrs).reduce(
    (style, [name, value]) => {
      const lcname = name.toLowerCase()
      const styler = styleFunctions[lcname]
        || fail(`Invalid style: ${lcname}`)
      styler(style, value)
      return style
    },
    target
  )
}

