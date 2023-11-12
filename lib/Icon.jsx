import React    from 'react'
import IconData from './IconData.js'
import { SVGIcon, resolveIconData } from './index.js'

// TODO: fixedWidth

export const Icon = ({
  name,
  // style,
  // transform,
  iconData=IconData,
  ...props
}) =>
  name
    ? <SVGIcon {...props} {...resolveIconData(name, iconData)}/>
    : <SVGIcon {...props}/>

export default Icon