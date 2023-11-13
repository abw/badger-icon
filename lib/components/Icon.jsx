import React    from 'react'
import IconData from '../IconData.js'
import SVGIcon  from '../SVG/Icon.jsx'
import { resolveIconData, prepareIconProps } from '../utils/index.js'

// TODO: fixedWidth

export const Icon = ({
  name,
  // style,
  // transform,
  // className
  iconData=IconData,
  ...props
}) =>
  name
    ? <SVGIcon {...props} {...resolveIconData(name, iconData, props)}/>
    : <SVGIcon {...prepareIconProps(props)} />

export default Icon