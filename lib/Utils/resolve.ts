import { fail, isString, noValue } from '@abw/badger-utils'
import { DASH, SPLIT_DASH } from '../constants.js'
import { IconLibrary, IconSources, IconSpec, PropsObject, ResolvedIcon, SplitIconName } from '../types.js'
import { parseAttrs } from './attrs.js'
import { expandIconData } from './expand.js'
import { joinClasses } from './classes.js'
import { transformData } from './transform.js'
import { applyModifiers } from './modifiers.js'

/**
 * Split an icon uri into its constituent parts.
 * @example
 * splitIconName(
 *   'name1-name2-style1-style2.class1.class2?styleOpt1=val1&styleOpt2=val2',
 * )
 * // => {
 * //  dashes: ['name1', 'name2', 'style1', 'style2'],
 * //  classes: ['class1', 'class2'],
 * //  styles: { styleOpt1: 'val1', styleOpt2: 'val2' }
 * // }
 */

export const splitIconName = (uri: string): SplitIconName => {
  const [base, query=''] = uri.split('?')
  const [dash, ...classes] = base.split(/\.(?!\d)/)
  const dashes = dash.split(SPLIT_DASH).filter( d => d.length )
  const style  = parseAttrs(query)
  return {
    dashes, classes, style
  }
}

/**
 * Determine the longest slice of the dashed components that matches the name
 * of an icon in the icon library.  Returns an array containing the matched
 * name, an array of unused dashes and the icon source data.
 * @example
 * resolveIconName(
 *   ['name1', 'name2', 'style1', 'style2']
 *   { 'name1-name2': 'line: 1,2 3,4' }
 * )
 * // => [
 * //   'name1-name2',
 * //   ['style1', 'style2'],
 * //   'line: 1,2 3,4'
 * // ]
 */

export const resolveIconName = (dashes: string[], icons: IconSources): ResolvedIcon | null => {
  for (let n = dashes.length; n > 0; n--) {
    const slice = dashes.slice(0, n).join(DASH)
    if (icons[slice]) {
      return [
        slice,
        dashes.slice(n),
        icons[slice]
      ]
    }
  }
  return null
}


// Wrapping around that, we extract the icon data and sanitise it.
export const resolveIconData = (
  uri: string,
  library: IconLibrary,
  props: PropsObject = { }
) => {
  const { icons } = library
  const { dashes: nameDashes, classes, style } = splitIconName(uri)
  // const
  // const split = resolveIconName(uri, icons)
  // const { name, classes, style, dashes } = split
  const [name, dashes, spec] = resolveIconName(nameDashes, icons)
    || fail(`No icon found matching any leading subset of ${nameDashes.join(DASH)}`)

  const icon = expandIconData(data, library, { ...props, name })

  // CSS classes can be merged into a single string
  if (classes.length || props.className) {
    icon.className = joinClasses([
      ...(classes || []),
      props.className as string || null
    ])
  }

  // expand any transform defined in the icon data
  if (icon.transform) {
    icon.transform = transformData(icon.transform)
  }

  // expand any styles
  if (icon.style) {
    icon.style = isString(icon.style)
      ? parseAttrs(icon.style as string)
      : { ...icon.style as object }
  }

  // If explicit styles have been specified then they should take precedence
  // over any that are applied by the type
  if (icon.type) {
    const saveStyle = icon.style && { ...icon.style as object }
    applyModifiers(icon, icon.type as string)
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
