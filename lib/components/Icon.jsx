import React        from 'react'
import DefaultIcons from '../IconData.js'
import SVGIcon      from '../SVG/Icon.jsx'
import { Themed }   from '../Theme.js'
import { resolveIconData, prepareIconProps } from '../utils/index.js'

// TODO: fixedWidth

export const Icon = ({
  name,
  // style,
  // transform,
  // className
  icons=DefaultIcons,
  ...props
}) =>
  name
    ? <SVGIcon {...props} {...resolveIconData(name, icons, props)}/>
    : <SVGIcon {...prepareIconProps(props)} />

export default Themed(Icon, 'Icon')
