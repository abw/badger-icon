import { isArray, splitList } from '@abw/badger-utils'
import { ExpandedPath, StringPropsObject } from '../types'

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
    (object: StringPropsObject, point) => {
      if (params.length) {
        const param = params.shift() as string
        object[param] = point as string
      }
      return object
    },
    { } as StringPropsObject
  )
}
