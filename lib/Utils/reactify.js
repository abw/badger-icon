import { hasValue, isObject, isString } from '@abw/badger-utils'
import { parseAttrs } from './attrs.js'

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

export const reactiftyString = string =>
  hasValue(string)
    ? reactifty( parseAttrs(string) )
    : null

export const reactProps = ({
  style,
  class: className,
  ...props
}) => ({
  style: isString(style)
    ? reactiftyString(style)
    : reactifty(style),
  className,
  ...props
})
