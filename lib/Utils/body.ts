import { fail, hasValue, isArray, isObject, isString, noValue, remove, splitList } from '@abw/badger-utils'
import { joinClasses } from './classes.js'
import { applyModifiers } from './modifiers.js'
import { iconBodyGenerators } from './generators.js'
import { splitIconName } from './resolve.js'
import { DEFAULT_ICON_WIDTH, DEFAULT_ICON_HEIGHT, FILL } from '../constants.js'
import { IconDefaults, IconBody } from '../types.js'

export const iconDefaults: IconDefaults = {
  width:  DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  type:   FILL
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
