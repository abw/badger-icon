import { isObject } from '@abw/badger-utils'

// Convert SVG style props, e.g. fill-rule:evenodd, into the React
// equivalent, e.g. fillRule
export const reactifty = props =>
  isObject(props)
    ? Object.entries(props).reduce(
      (props, [key, value]) => {
        props[key.replace(/-./g, x => x[1].toUpperCase())] = value
        return props
      },
      { }
    )
    : props
