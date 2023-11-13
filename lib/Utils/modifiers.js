import { fail, isString } from '@abw/badger-utils'
import { styleFunctions } from './styles.js'
import { transformFunctions, nullTransform } from './transform.js'
import { nullStyle } from './styles.js'
import { SPLIT_DASH } from '../constants.js'

export function applyModifiers(
  icon,
  modifiers
) {
  const mods = isString(modifiers)
    ? modifiers.split(SPLIT_DASH)
    : modifiers

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
      transformer(icon.transform ||= { ...nullTransform }, value)
    },
  )
}

