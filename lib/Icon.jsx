import React              from 'react'
// import IconData           from './IconData.jsx'
// import { Themed }         from '@/src/Theme.jsx'
import { fail, isString } from '@abw/badger-utils'

// TODO: fixedWidth

export const Icon = ({
  name,
  iconData=IconData,
  ...props
}) =>
  name
    ? <IconSVG {...props} {...getIconData(name, iconData)}/>
    : <IconSVG {...props}/>

export const getIconData = (name, iconData) => {
  const data = iconData[name]
    || fail(`Invalid icon name: ${name}`)
  return isString(data)
    ? {
        path: data,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
      }
    : data
}
