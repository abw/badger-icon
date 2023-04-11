import { fail, isString } from '@abw/badger-utils'
import transforms from './transforms.js'

export function iconData(source) {
  const icon = isString(source)
    ? { path: source }
    : source
  const { width=512, height=512 } = icon
  const paths = (icon.paths || [ icon.path ]).map( pathData )
  let data = { width, height, paths }

  if (source.style) {
    data.style = styleData(source.style)
  }
  if (source.transform) {
    data.transform = transformData(source.transform)
  }
  if (source.class) {
    data.class = source.class
  }
  return data
}

export function pathData(path) {
  let data = isString(path)
    ? { d: path }
    : path

  if (isString(data.style)) {
    data.style = styleData(data.style)
  }
  if (data.transform) {
    data.transform = transformData(data.transform)
  }
  return data
}

export function parseAttrString(string) {
  return string
    .split(/\s*;\s*/)
    .reduce(
      (attrs, attr) => {
        const [name, value] = attr.split(/\s*:\s*/)
        attrs[name] = value
        return attrs
      },
      { }
    )
}

export function styleData(style) {
  return isString(style)
    ? parseAttrString(style)
    : style
}

export function transformData(transform) {
  const attrs = isString(transform)
    ? parseAttrString(transform)
    : transform

  return Object.entries(attrs).reduce(
    (transform, [name, value]) => {
      const transformer = transforms[name]
        || fail(`Invalid transform: ${name}`)
      transformer(transform, value)
      return transform
    },
    {
      x:      0,
      y:      0,
      size:   16,
      flipX:  false,
      flipY:  false,
      rotate: 0
    }
  )
}

export default iconData