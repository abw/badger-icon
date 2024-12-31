import { isString } from '@abw/badger-utils'
import { parseAttrs } from './attrs'
import { transformData } from './transform'
import { applyModifiers } from './modifiers'
import { expandPath } from './expand'
import {
  DEFAULT_ICON_WIDTH, DEFAULT_ICON_HEIGHT, FILL, SPLIT_DASH
} from '../constants.js'

export const prepareIconProps = ({
  size,
  ...icon
}: { size?: number, [key: string]: any }) => {
  icon.width  ??= size || DEFAULT_ICON_WIDTH
  icon.height ??= size || DEFAULT_ICON_HEIGHT

  if (icon.path) {
    Object.assign(icon, expandPath(icon.path))
  }

  // hmmm... this overwrites any style parameters
  let styleProps

  if (icon.style) {
    if (isString(icon.style)) {
      styleProps = parseAttrs(icon.style)
      icon.style = { }
    }
    else {
      styleProps = { ...icon.style }
    }
  }
  // console.log(`styleProps: `)


  applyModifiers(
    icon,
    icon.type
      ? icon.type.split(SPLIT_DASH).filter( (d: string) => d.length )
      : FILL
  )
  delete icon.type

  if (icon.style && styleProps) {
    Object.assign(icon.style, styleProps)
  }

  // expand any transform defined in the icon data
  if (icon.transform) {
    icon.transform = transformData(icon.transform)
  }

  return icon
}

