import { fail, isString } from '@abw/badger-utils'
import { parseAttrs } from './attrs.js'
import { CURRENT_COLOR } from '../constants.js'
import { StyleFunctions, StyleProps, StylePropsTable } from '../types'

// NOTE: A percentage value for stroke-width is always computed as a
// percentage of the normalized viewBox diagonal length.  The values
// used below are based on multiples of a single pixel in an SVG with a
// height/width of 16px, i.e. 1em.  So a stroke-width of 1 unit, should
// be 1/16th of the height or width.  Assuming a square icon, the diagonal
// would be 1.4142 x 16px = 22.627px.  So to get a stroke width equivalent
// to 1px we can express it as 1 / 22.627 = 4.42%

const baseWidth     = 4.42
const widthMultiple = (n: number) => `${baseWidth * n}%`

export const nullStyle: StyleProps = {
  // fill:               'currentColor',
  // stroke:             'currentColor',
  /*
  strokeWidth:        widthMultiple(2),
  strokeLinecap:      'round',
  strokeLinejoin:     'round',
  strokeMiterlimit:   '1.5'
  */
}

// export type StylePropFunction =

export const styles: StylePropsTable = {
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
  line: { }
}
styles.line = styles.outline

export const styleFunctions: StyleFunctions = {
  ...Object.entries(styles).reduce(
    (fns, [name, styles]) => {
      fns[name] = (style: StyleProps) => Object.assign(style, styles)
      return fns
    },
    { } as StyleFunctions
  ),

  fill: (style: StyleProps, color: boolean | string) =>
    style.fill = color === true ? CURRENT_COLOR : color as string,

  stroke: (style: StyleProps, color: boolean | string) =>
    style.stroke = color === true ? CURRENT_COLOR : color as string,

  nofill: (style: StyleProps) =>
    delete style.fill,

  nostroke: (style: StyleProps) =>
    delete style.stroke,

  strokewidth: (style: StyleProps, width: string) =>
    style.strokeWidth = width.match(/^[\d.]+$/)
      ? widthMultiple(parseFloat(width))
      : width,

  opacity: (style: StyleProps, opacity: string) =>
    style.opacity = opacity,

  fillopacity: (style: StyleProps, opacity: string) =>
    style.fillOpacity = opacity,

  strokeopacity: (style: StyleProps, opacity: string) =>
    style.strokeOpacity = opacity,

  dasharray: (style: StyleProps, array: string | number[]) =>
    style.strokeDasharray = array,

  drawlength: (style: StyleProps, length: string) =>
    style['--draw-length'] = length,

  drawtime: (style: StyleProps, time: string) =>
    style['--draw-time'] = time,

  filltime: (style: StyleProps, time: string) =>
    style['--fill-time'] = time,
}

export function styleData(
  style: StyleProps | string,
  target: StyleProps = { ...nullStyle }
) {
  const attrs = isString(style)
    ? parseAttrs(style as string)
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

