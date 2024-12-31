import { hasValue, isObject, isString } from '@abw/badger-utils'
import { parseAttrs } from './attrs'
import { PropsObject } from '../types'

// Convert SVG style props, e.g. fill-rule:evenodd, into the React
// equivalent, e.g. fillRule
export const reactifty = (props: PropsObject | string) =>
  isObject(props)
    ? Object.entries(props as object).reduce(
      (props, [key, value]) => {
        props[key.replace(/(?!-)-./g, x => x[1].toUpperCase())] = value
        return props
      },
      { } as PropsObject
    )
    : props

export const reactiftyString = (string: string) =>
  hasValue(string)
    ? reactifty( parseAttrs(string) )
    : null

export const reactProps = ({
  style,
  className,
  ...props
} : {
  style: PropsObject | string,
  className: string,
  [key: string]: PropsObject | string
}
) => ({
  style: isString(style)
    ? reactiftyString(style as string)
    : reactifty(style),
  className,
  ...props
})
