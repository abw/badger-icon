import { fail, hasValue, isArray, isObject, isString, noValue, remove, splitList } from '@abw/badger-utils'
import { parseAttrs } from './attrs.js'
import { joinClasses } from './classes.js'
import { transformData } from './transform.js'
import { applyModifiers } from './modifiers.js'
import {
  DASH, DEFAULT_ICON_WIDTH, DEFAULT_ICON_HEIGHT, FILL, PATH, POLYLINE,
  POLYGON, SVG, ARRAY, CIRCLE, ELLIPSE, LINE, RECT, SPLIT_DASH
} from '../constants.js'

export const iconDefaults = {
  width:  DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  type:   FILL
}

export const iconBodyGenerators = {
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

export function expandPoints(string, names) {
  const params = isArray(names) ? [...names] : splitList(names)
  const points = splitList(string)
  return points.reduce(
    (object, point) => {
      if (params.length) {
        const param = params.shift()
        object[param] = point
      }
      return object
    },
    { }
  )
}

// An icon can be specified with a uri this:
//   name1-name2-style1-style2.class1.class2?styleOpt1=val1&styleOpt2=val2
//
// We want to determine the longest dashed prefix that matches an icon in
// iconData (e.g. name1-name2), the additional styling options (style1,
// style2), the CSS classes to add (class1, class2) and additional styling
// parameters ({ styleOpt1: val1, styleOpt2: val2 })


// First split it into dashes (name1, name2, style1, style2), classes
// (class1, class2) and style options ({ styleOpt1: val1, styleOpt2: val2 })
export const splitIconName = uri => {
  const [base, query=''] = uri.split('?')
  const [dash, ...classes] = base.split(/\.(?!\d)/)
  const dashes = dash.split(SPLIT_DASH).filter( d => d.length )
  const style  = parseAttrs(query)
  return {
    dashes, classes, style
  }
}

// Then we look for the long subsection of dashes that correspond to a name
// in iconData, save it as the name (name1-name2) and leave the remaining
// items in dashes (style1, style2)
export const resolveIconName = (uri, icons) => {
  const split = splitIconName(uri)
  const { dashes } = split

  for (let n = dashes.length; n > 0; n--) {
    const slice = dashes.slice(0, n).join(DASH)
    if (icons[slice]) {
      split.name = dashes.splice(0, n).join(DASH)
      break
    }
  }
  return split
}

// Wrapping around that, we extract the icon data and sanitise it.
export const resolveIconData = (uri, library, props={}) => {
  const { icons } = library
  const split = resolveIconName(uri, icons)
  const { name, classes, style, dashes } = split

  if (noValue(name)) {
    fail(`No icon found matching any leading subset of ${split.dashes.join(DASH)}`)
  }
  const data = library.icons[name]
    || fail(`Icon not found in data: ${name}`)

  const icon = expandIconData(data, library, { ...props, name })

  // CSS classes can be merged into a single string
  if (classes.length || props.className) {
    icon.className = joinClasses([...(classes || []), props.className])
  }

  // expand any transform defined in the icon data
  if (icon.transform) {
    icon.transform = transformData(icon.transform)
  }

  // expand any styles
  if (icon.style) {
    icon.style = isString(icon.style)
      ? parseAttrs(icon.style)
      : { ...icon.style }
  }

  // If explicit styles have been specified then they should take precedence
  // over any that are applied by the type
  if (icon.type) {
    const saveStyle = icon.style && { ...icon.style }
    applyModifiers(icon, icon.type)
    delete icon.type
    if (saveStyle) {
      Object.assign(icon.style, saveStyle)
    }
  }

  // apply dashes to set style / transforms
  if (dashes.length) {
    applyModifiers(icon, dashes)
  }

  if (Object.keys(style).length) {
    // add a style object to the icon if it doesn't already have one and
    // merge in the additional style parameters
    icon.style = Object.assign(icon.style || { }, style)
  }

  return icon
}

export function expandPath(path) {
  const match = path.match(/^(.*?):(.*)/)
  return match
    ? { path: match[2], type: match[1] }
    : { path }
}

export const expandIconData = (data, library, props={}) => {
  // const { defaults={}, icons } = library
  const { defaults={} } = library
  const icon = {
    ...iconDefaults,
    ...defaults,
    ...props
  }
  // console.log(`expandIconData() `, data)
  return expandIconDataType(icon, data, library)
}

export const expandIconDataType = (icon, data, library) => {
  if (isString(data)) {
    return expandIconString(icon, data)
  }

  if (isObject(data)) {
    return expandIconObject(icon, data, library)
  }

  if (isArray(data)) {
    return expandIconArray(icon, data, library)
  }

  fail(`Cannot parse icon data: ${data}`)
}


export function expandIconString(icon, string) {
  if (string.match(/^\w*</)) {
    // A string is raw SVG if the first non-whitespace character is <
    // console.log(`found SVG string: ${data}`)
    icon.body = {
      element: 'svg',
      svg: string
    }
    return icon
  }

  const match = string.match(/^(.*?):(.*)/)
  if (match) {
    const [ , prefix, data] = match
    const { dashes, classes } = splitIconName(prefix)
    const element = dashes.shift()

    const generator = iconBodyGenerators[element]
      || fail(`Invalid icon data element: ${element}`)

    icon.body = generator(data)

    // add any dotted classes
    if (classes.length) {
      icon.body.className = joinClasses(classes)
    }

    // apply dashes to set style / transforms
    if (dashes.length) {
      applyModifiers(icon.body, dashes)
    }

    return icon
  }

  // otherwise we assume it's path data
  // const parts = expandPath(data)
  icon.body = {
    element: 'path',
    d: string
  }
  return icon
}

export function expandIconObject(icon, object, library) {
  const body = { ...object }
  if (body.element) {
    // the data is already be an expanded object with an element property
    icon.body = body
    return icon
  }

  /* something like this to expand { width: 12, height: 14, body: [ ] }
  if (body.body) {
    icon.body => expandIconData(body.body, library).body
  }
  */
  if (body.data) {
    //console.log(`expanding`, JSON.parse(JSON.stringify(icon)))
    //console.log(`body`, JSON.parse(JSON.stringify(body)))
    const data = remove(body, 'data')
    expandIconDataType(icon, data, library)
    Object.assign(icon, body)
    //console.log(`expanded`, icon)
    return icon
  }

  // look to see if there's a path, polygon or polyline defined
  for (let item of Object.entries(iconBodyGenerators)) {
    const [key, generator] = item
    const value = body[key]
    if (hasValue(value)) {
      // if there is then have the generator function generate the body
      icon.body = generator(value)
      // assign anything else in the body to the icon
      delete body[key]
      Object.assign(icon, body)

      // console.log(`generated ${key} body: `, icon)
      return icon
    }
  }
  fail(`Cannot parse icon data: ${JSON.stringify(object)}`)
}

export function expandIconArray(icon, array, library) {
  icon.body = {
    element: 'array',
    items: array.map(
      item => expandIconData(item, library).body
    )
  }
  return icon
}


export const prepareIconProps = ({ size, ...icon }) => {
  icon.width  ??= size || DEFAULT_ICON_WIDTH
  icon.height ??= size || DEFAULT_ICON_HEIGHT

  if (icon.path) {
    Object.assign(icon, expandPath(icon.path))
  }

  // hmmm... this overwrites any style parameters
  let styleProps

  if (icon.style) {
    if (isString(icon.style)) {
      styleProps = parseAttrs(icon.style)
      icon.style = { }
    }
    else {
      styleProps = { ...icon.style }
    }
  }
  // console.log(`styleProps: `)


  applyModifiers(
    icon,
    icon.type
      ? icon.type.split(SPLIT_DASH).filter( d => d.length )
      : FILL
  )
  delete icon.type

  if (icon.style && styleProps) {
    Object.assign(icon.style, styleProps)
  }

  // expand any transform defined in the icon data
  if (icon.transform) {
    icon.transform = transformData(icon.transform)
  }

  /*
  // expand any styles
  if (icon.style) {
    icon.style = isString(icon.style)
      ? parseAttrs(icon.style)
      : { ...icon.style }
  }

  if (icon.default) {
    // console.log(`applying data default: ${data.default}`)
    applyModifiers(icon, icon.default)
    // console.log(`modified: `, icon)
  }
  */
  return icon
}


/*

export const parseSpec = (spec='', icons={}) => {
  let name
  let icon
  while (dashes.length)  {
    name = dashes.join('-')
    icon = icons[name]
    if (icon) {
      console.log(` - ${name} is a valid icon name`)
      break
    }
    const mod = dashes.pop()
    const styleMod = pathStyles[mod]
    if (styleMod) {
      console.log(` - ${styleMod} is a valid style modified: `, styleMod)
      styles = { ...styles, ...styleMod }
      continue
    }
    const match = mod.match(/^(.*?)(\d*)$/)
    console.log(` - transform [${match[1]}] [${match[2]}]`);
  }
*/

