import Body from './Body.jsx'
import Transform from './Transform.jsx'
import { reactifty } from '../utils/reactify.js'
import { DEFAULT_ICON_HEIGHT, DEFAULT_ICON_WIDTH } from '../constants.js'
import { IconStyle, SVGIconProps } from '../types.js'
import { CSSProperties } from 'react'

export const SVGIcon = ({
  onClick,
  minx=0,
  miny=0,
  width=DEFAULT_ICON_WIDTH,
  height=DEFAULT_ICON_HEIGHT,
  style,
  transform,
  className='',
  // fill='currentColor'
  ...rest
} : SVGIconProps) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img" aria-hidden="true" focusable="false"
    viewBox={`${minx} ${miny} ${width} ${height}`}
    className={`${className} icon`}
    style={reactifty(style as IconStyle) as CSSProperties}
    onClick={onClick}
  >
    { transform
      ? <Transform
          width={width}
          height={height}
          transform={transform}
        >
          <Body {...rest}/>
        </Transform>
      : <Body {...rest}/>
    }
  </svg>

export default SVGIcon
