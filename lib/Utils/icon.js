import { fail, isString, noValue } from '@abw/badger-utils'
import { parseAttrs } from './attrs.js'
import { joinClasses } from './classes.js'
import { DASH, DEFAULT_ICON_WIDTH, DEFAULT_ICON_HEIGHT } from '../constants.js'
import { transformData } from './transform.js'

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
  const [dash, ...classes] = base.split('.')
  const dashes = dash.split(DASH).filter( d => d.length )
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
export const resolveIconData = (uri, iconData) => {
  const split = resolveIconName(uri, iconData)
  const { name, classes, style } = split

  if (noValue(name)) {
    fail(`Invalid icon name: ${uri} (no icon defined matching any subset of ${split.dashes.join(DASH)})`)
  }
  const data = iconData[name]
    || fail(`Icon not found in data: ${name}`)

  const icon = split.icon = isString(data)
    ? {
        ...iconDefault,
        path:   data,
      }
    : {
        ...iconDefault,
        ...data
      }

  // CSS classes can be merged into a single string
  if (classes.length) {
    icon.className = joinClasses(classes)
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

  // TODO: apply dashes to set style / transforms
  // Tricky because these might be transforms (e.g. -flipX, -rotate:90)
  // or style sets (e.g. -thick, -thin)

  if (Object.keys(style).length) {
    // add a style object to the icon if it doesn't already have one and
    // merge in the additional style parameters
    icon.style = Object.assign(icon.style || { }, style)
  }

  return split
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