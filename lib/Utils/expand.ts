import { fail, hasValue, isArray, isObject, isString, noValue, remove, splitList } from '@abw/badger-utils'
import { joinClasses } from './classes.js'
import { applyModifiers } from './modifiers.js'
import { iconBodyGenerators } from './generators.js'
import { splitIconName } from './resolve.js'
import { DEFAULT_ICON_WIDTH, DEFAULT_ICON_HEIGHT, FILL } from '../constants.js'
import { ExpandedPath, IconSource, IconLibrary, IconDefaults, IconSpec, PropsObject, IconProps, IconBody, StringPropsObject } from '../types.js'

export const iconDefaults: IconDefaults = {
  width:  DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  type:   FILL
}

/**
 * Split a string of the form `"type:path"` into an object containing the
 * separate `type` and `path` string.  If a colon isn't present then the whole
 * string is considered the `path`.
 * @example
 * expandPath('foo:bar') // => { type: 'foo', path: 'bar'}
 * expandPath('foobar')  // => { path: 'foobar'}
 */

export function expandPath(path: string): ExpandedPath {
  const match = path.match(/^(.*?):(.*)/)
  return match
    ? { path: match[2], type: match[1] }
    : { path }
}

/**
 * Expands a string containing multiple SVG coordinates and assigns them to
 * an object using the `names` passed as an argument.  The `name` can be an
 * array of keys or a string containing whitespace delimited keys.

 * @example
 * expandPoints('10 20 30', 'a b c')   // => { a: 10, b: 20, c: 30 }
 */
export function expandPoints(
  string: string,
  names : string | string[]
): StringPropsObject {
  const params = isArray(names)
    ? [...names as string[]]
    : splitList(names as string)
  const points = splitList(string)
  return points.reduce(
    (object, point) => {
      if (params.length) {
        const param = params.shift()
        object[param] = point
      }
      return object
    },
    { } as StringPropsObject
  )
}


export const expandIconData = (
  data: IconSource,
  library: IconLibrary,
  props={}
) => {
  const { defaults={} } = library
  const icon: IconProps = {
    ...iconDefaults,
    ...defaults,
    ...props
  }
  // console.log(`expandIconData() `, data)
  return expandIconDataType(icon, data, library)
}

export const expandIconDataType = (
  icon: IconProps,
  data: IconSource,
  library: IconLibrary
) => {
  if (isString(data)) {
    return expandIconString(icon, data as string)
  }

  if (isObject(data)) {
    return expandIconObject(icon, data as PropsObject, library)
  }

  if (isArray(data)) {
    return expandIconArray(icon, data as IconSource[], library)
  }

  fail(`Cannot parse icon data: ${data}`)
}


export function expandIconString(
  icon: IconProps,
  string: string
) {
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

export function expandIconObject(
  icon: IconProps,
  object: PropsObject,
  library: IconLibrary
) {
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
      icon.body = generator(value as string)
      // assign anything else in the body to the icon
      delete body[key]
      Object.assign(icon, body)

      // console.log(`generated ${key} body: `, icon)
      return icon
    }
  }
  fail(`Cannot parse icon data: ${JSON.stringify(object)}`)
}

export function expandIconArray(
  icon: PropsObject,
  array: IconSource[],
  library: IconLibrary
) {
  icon.body = {
    element: 'array',
    items: array.map(
      item => expandIconData(item, library).body
    )
  }
  return icon
}
