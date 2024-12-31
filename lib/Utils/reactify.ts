import { hasValue, isObject, isString } from '@abw/badger-utils'
import { parseAttrs } from './attrs'
import { Nothing, PropsObject } from '../types'

// Convert SVG style props, e.g. fill-rule:evenodd, into the React
// equivalent, e.g. fillRule
export const reactifty = (props: PropsObject | string | Nothing) =>
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
}: PropsObject) => ({
  style: isString(style)
    ? reactiftyString(style as string)
    : reactifty(style as PropsObject | string | Nothing),
  className,
  ...props
})

/*: {
  style: string | PropsObject,
  className: string,
  [key: string]: PropsObject | string
}
*/