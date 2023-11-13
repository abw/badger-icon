import { fail, isString, noValue } from '@abw/badger-utils'
import { parseAttrs } from './attrs.js'
import { joinClasses } from './classes.js'
import { DASH, DEFAULT_ICON_WIDTH, DEFAULT_ICON_HEIGHT, FILL } from '../constants.js'
import { transformData } from './transform.js'
import { applyModifiers } from './modifiers.js'
import { SPLIT_DASH } from '../constants.js'

const iconDefault = {
  width:  DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
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
export const resolveIconName = (uri, iconData) => {
  const split = splitIconName(uri)
  const { dashes } = split

  for (let n = dashes.length; n > 0; n--) {
    const slice = dashes.slice(0, n).join(DASH)
    if (iconData[slice]) {
      split.name = dashes.splice(0, n).join(DASH)
      break
    }
  }
  return split
}

// Wrapping around that, we extract the icon data and sanitise it.
export const resolveIconData = (uri, iconData, props={}) => {
  const split = resolveIconName(uri, iconData)
  const { name, classes, style, dashes } = split

  if (noValue(name)) {
    fail(`No icon found matching any leading subset of ${split.dashes.join(DASH)}`)
  }
  const data = iconData[name]
    || fail(`Icon not found in data: ${name}`)

  const icon = isString(data)
    ? {
        ...iconDefault,
        ...expandPath(data),
        name
      }
    : {
        ...iconDefault,
        ...data,
        name
      }

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

  if (icon.type) {
    applyModifiers(icon, icon.type)
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

export const prepareIconProps = ({ size, ...icon }) => {
  icon.width  ??= size || DEFAULT_ICON_WIDTH
  icon.height ??= size || DEFAULT_ICON_HEIGHT

  if (icon.path) {
    Object.assign(icon, expandPath(icon.path))
  }

  applyModifiers(
    icon,
    icon.type
      ? icon.type.split(SPLIT_DASH).filter( d => d.length )
      : FILL
  )
  /*
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

  if (icon.default) {
    // console.log(`applying data default: ${data.default}`)
    applyModifiers(icon, icon.default)
    // console.log(`modified: `, icon)
  }
  */
  return icon
}



export function expandPath(path) {
  const match = path.match(/^(.*?):(.*)/)
  return match
    ? { path: match[2], type: match[1] }
    : { path }
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