import { fail, isString } from '@abw/badger-utils'
import { styleFunctions } from './styles.js'
import { transformFunctions, nullTransform } from './transform.js'
import { nullStyle } from './styles.js'
import { SPLIT_DASH } from '../constants.js'
import { PropsObject, TransformObject } from '../types.js'

export function applyModifiers(
  icon: PropsObject,
  modifiers: string | string[]
) {
  const mods = isString(modifiers)
    ? (modifiers as string).split(SPLIT_DASH)
    : modifiers as string[]

  return mods.forEach(
    modifier => {
      const [name, value=true] = modifier.split(/[:=]/)
      const lcname = name.toLowerCase()
      // console.log(`processing modifier: ${modifier} = [${lcname}]=[${value}]`)
      const styler = styleFunctions[lcname]
      if (styler) {
        styler(icon.style ||= { ...nullStyle }, value)
        return
      }
      const transformer = transformFunctions[lcname]
        || fail(`Invalid style or transform: ${lcname}`)
      transformer(
        (icon.transform ||= { ...nullTransform }) as TransformObject,
        value
      )
    },
  )
}

