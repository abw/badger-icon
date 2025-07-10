import { fail, hasValue, isArray, isObject, isString } from '@abw/badger-utils'
import { joinClasses } from './classes'
import { applyModifiers } from './modifiers'
import { iconBodyGenerators } from './generators'
import { splitIconName } from './resolve'
import { DEFAULT_ICON_WIDTH, DEFAULT_ICON_HEIGHT, FILL, ARRAY } from '../constants'
import { IconDefaults, IconBody, IconProps, PropsObject, IconSource } from '../types'

export const iconDefaults: IconDefaults = {
  width:  DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  type:   FILL
}

/**
 * Expands the `icon` body `data` by calling {@link iconBodyType()} and assigns
 * the returned value to `icon.body`.  The `data` can be a string, object or
 * array.  If `data` is an object containing a `body` property then that
 * is passed to {@link iconBodyType()} and any remaining properties are assigned
 * to the `icon`.
 */

export const iconBody = (
  icon: IconProps,
  data: IconSource,
): IconProps => {
  if (isObject(data) && (data as PropsObject).body) {
    // If the body is specified as an object with its own 'body' property
    // then we assume that the 'body' is used to generate the body and any
    // other properties should be added to the icon, e.g.
    // { body: 'circle:10 20 30', width: 120, height: 120 }
    const { body, ...rest } = data as PropsObject
    // const body: PropsObject = { ...data as PropsObject }
    icon.body = iconBodyType(body as IconSource)
    Object.assign(icon, rest)
    //
  }
  else {
    // There may be a type, width and/or height in the data
    icon.body = iconBodyType(data)
    if (isObject(data)) {
      if ((data as PropsObject).type) {
        icon.type = (data as PropsObject).type as string
      }
      if ((data as PropsObject).width) {
        icon.width = (data as PropsObject).width as number
      }
      if ((data as PropsObject).height) {
        icon.height = (data as PropsObject).height as number
      }
    }
  }
  return icon
}

/**
 * Expand an icon body specified as a string, object or array.
 * @example
 * iconBodyType('circle:10 20 30')
 *   // { element: 'circle', cx: 10, cy: 20, r: 30 }
 * iconBodyType({ circle: '10 20 30' })
 *   // { element: 'circle', cx: 10, cy: 20, r: 30 }
 * iconBodyType([ 'circle:10 20 30', { rect: '1 2 3 4 } ])
 *   // {
 *   //   element: 'array',
 *   //   items: [
 *   //     { element: 'circle', cx: 10, cy: 20, r: 30 }
 *   //     { element: 'rect', x: 1, y: 2, width: 3, height: 4 }
 *   //   ]
 *   // }
 */

export const iconBodyType = (
  data: IconSource,
): IconBody => {
  if (isString(data)) {
    return iconStringBody(data as string)
  }
  else if (isObject(data)) {
    return iconObjectBody(data as PropsObject)
  }
  else if (isArray(data)) {
    return iconArrayBody(data as IconSource[])
  }
  else {
    fail(`Cannot parse icon data: ${data}`)
  }
}

/**
 * Expand an icon body specified as a string.  This can be SVG text (`string`
 * starts with `<` following any optional whitespace), a `type:data` string
 * providing the data for a particular source type, or a string without any
 * `type:` prefix which is assumed to be path data.
 * @example
 * iconStringBody('<line ...>')
 *   // => { element: 'svg', svg: '<line ...>' }
 * iconStringBody('circle:10 20 30')
 *   // => { element: 'circle', cx: 10, cy: 20, r: 30 }
 * iconStringBody('M1,2L3,4')
 *   // => { element: 'path', d: 'M1,2L3,4' }
 */

export function iconStringBody(
  string: string
): IconBody {
  if (string.match(/^\s*</)) {
    // A string is raw SVG if the first non-whitespace character is <
    // console.log(`found SVG string: ${data}`)
    return {
      element: 'svg',
      svg: string.replace(/^\s*/, '')
    }
  }

  const match = string.match(/^(.*?):(.*)/)
  if (match) {
    const [ , prefix, data] = match
    const { dashes, classes } = splitIconName(prefix)
    const element = dashes.shift()

    const generator = iconBodyGenerators[element as string]
      || fail(`Invalid icon data element: ${element}`)

    const body: IconBody = generator(data)

    // add any dotted classes
    if (classes.length) {
      body.className = joinClasses(classes)
    }

    // apply dashes to set style / transforms
    if (dashes.length) {
      applyModifiers(body, dashes)
    }

    return body
  }

  // otherwise we assume it's path data
  // const parts = expandPath(data)
  return {
    element: 'path',
    d: string
  }
}

/**
 * Expand an icon body specified as an object.  If the object contains an
 * `element` property then it is assumed that it's already expanded and a
 * copy of the object is returned.  Otherwise we look for a property matching
 * a body generator function.
 * @example
 * iconObjectBody({ element: 'circle', cx: 10, cy: 20, r: 30 })
 *   // => { element: 'circle', cx: 10, cy: 20, r: 30 }
 * iconObjectBody({ circle: '10 20 30' })
 *   // => { element: 'circle', cx: 10, cy: 20, r: 30 }
 */

export function iconObjectBody(
  object: PropsObject,
): IconBody {
  const body: PropsObject = { ...object }
  if (body.element) {
    // the data is already be an expanded object with an element property
    return body
  }

  // look to see if there's a path, polygon, polyline or other property that
  // corresponds to a generator function
  for (const [key, generator] of Object.entries(iconBodyGenerators)) {
    const value = body[key]
    if (hasValue(value)) {
      // if there is then have the generator function generate the body
      const generated = generator(value as string)
      if (body.modifiers) {
        applyModifiers(generated, body.modifiers as string)
      }
      return generated
    }
  }

  fail(`Cannot parse icon data: ${JSON.stringify(object)}`)
}

/**
 * Expand an icon body specified as an array.  Each of the items in the
 * array can be a string, object or array.
 * @example
 * iconArrayBody([ 'circle:10 20 30', 'rect:0 0 100 100' ])
 *   // => [
 *   //  { element: 'circle', cx: 10, cy: 20, r: 30 }
 *   //  { element: 'rect', x: 0, y: 0, width: 100, height: 100 }
 *   // ]
 */

export function iconArrayBody(
  array: IconSource[]
): IconBody {
  return {
    element: ARRAY,
    // NOTE: we expand out any nested arrays
    items: array.flatMap(
      item => {
        const body = iconBodyType(item)
        return body.element === ARRAY
          ? body.items
          : body
      }
    )
    /* Old nested array version
    items: array.map(
      item => iconBodyType(item)
    )
    */
  }
}
