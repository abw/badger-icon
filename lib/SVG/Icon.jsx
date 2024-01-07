import React from 'react'
import Body from './Body.jsx'
import Transform from './Transform.jsx'
import { reactifty } from '../utils/reactify.js'
import { DEFAULT_ICON_HEIGHT, DEFAULT_ICON_WIDTH } from '../constants.js'

export const SVGIcon = ({
  onClick,
  minx=0,
  miny=0,
  width=DEFAULT_ICON_WIDTH,
  height=DEFAULT_ICON_HEIGHT,
  style,
  transform,
  className='',
  debug,
  ...props
  // fill='currentColor'
}) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img" aria-hidden="true" focusable="false"
    viewBox={`${minx} ${miny} ${width} ${height}`}
    className={`${className} icon`}
    style={reactifty(style)}
    onClick={onClick}
  >
    { Boolean(debug) && console.log(`style: `, style) }
    { transform
      ? <Transform
          width={width}
          height={height}
          transform={transform}
        >
          <Body {...props}/>
        </Transform>
      : <Body {...props}/>
    }
  </svg>

export default SVGIcon
