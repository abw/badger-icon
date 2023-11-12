import { fail, isString } from '@abw/badger-utils'
import { pathStyles } from './Styles.js'
import { transformers } from './Transform.jsx'

// name1-name2-style1-style2.class1.class2?styleOption1=styleValue1&styleOption2=styleValue2
export const parseSpec = (spec='', icons={}) => {
  const [base, query=''] = spec.split('?')
  const [dash, ...classes] = base.split('.')
  let dashes = dash.split('-')
  console.log(`spec=[${spec}]`)
  console.log(` - base=[${base}] query=[${query}]`)
  console.log(` - dash=[${dash}] dashes=[${dashes}] classes=${classes}`)
  let styles = { ...pathStyles.default }
  let transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  }
  let transformed = false
  let name
  let icon
  while (dashes.length)  {
    name = dashes.join('-')
    icon = icons[name]
    if (icon) {
      console.log(` - ${name} is a valid icon name`)
      break
    }
    const mod = dashes.pop()
    const styleMod = pathStyles[mod]
    if (styleMod) {
      console.log(` - ${styleMod} is a valid style modified: `, styleMod)
      styles = { ...styles, ...styleMod }
      continue
    }
    const match = mod.match(/^(.*?)(\d*)$/)
    console.log(` - transform [${match[1]}] [${match[2]}]`);

    const transformer = transformers[match[1]]
    if (transformer) {
      console.log(` - ${mod} is a valid transformer`)
      console.log(' - transform before:', transform)
      transform = transformer(transform, match[2].length ? parseInt(match[2]) : 0)
      console.log(' - transform after:', transform)
      transformed = true
      continue
    }
    fail(`Invalid icon name "${dash}" (${mod} is not a valid style or transformer)`)
  }

  icon = isString(icon)
    ? {
        width:  512,
        height: 512,
        path:   icon
      }
    : icon

  let style = query
    .split('&')
    .reduce(
      (params, param) => {
        const [name, value] = param.split('=')
        // console.log(`param [${param}] = [${name}]=[${value}]`);
        params[name] = value
        return params
      },
      styles
    )
  return {
    name,
    icon,
    style,
    transform: transformed && transform,
    className: classes.join(' ')
  }
}