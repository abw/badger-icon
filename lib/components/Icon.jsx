import React        from 'react'
import Library      from '../Library.js'
import SVGIcon      from '../SVG/Icon.jsx'
import { Themed }   from '../Theme.js'
import { resolveIconData, prepareIconProps } from '../utils/index.js'

// TODO: fixedWidth

export const Icon = ({
  name,
  // style,
  // transform,
  // className
  library=Library,
  ...props
}) =>
  name
    ? <SVGIcon {...props} {...resolveIconData(name, library, props)}/>
    : <SVGIcon {...prepareIconProps(props)} />

export default Themed(Icon, 'Icon')
