import { isUndefined } from '@abw/badger-utils'
import { PropsObject } from '../types'

export function parseAttrs(string: string) {
  return string
    .split(/\s*[;&]\s*/)
    .filter( v => v.length > 0 )
    .reduce(
      (attrs, attr) => {
        const [name, value] = attr.split(/\s*[:=]\s*/)
        attrs[name] = isUndefined(value) ? true : value
        return attrs
      },
      { } as PropsObject
    )
}
