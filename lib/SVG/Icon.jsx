import React from 'react'
import { DEFAULT_ICON_HEIGHT, DEFAULT_ICON_WIDTH } from '../constants.js'
import Transform from './Transform.jsx'
import Body from './Body.jsx'
// import { Path } from './Path.jsx'
import { reactifty } from '../utils/reactify.js'

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
          {/* <Path d={path}/> */}
          <Body {...props}/>
        </Transform>
      // : <Path d={path}/>
      : <Body {...props}/>
    }
  </svg>

/*

  return (
    <svg
      // style={style && ReactStyle(style)}
      onClick={props.onClick}
    >
      { specs.map(
        ({name, icon, className, style, transform}, n) => transform
          ? <Transform key={n} icon={icon} transform={transform} className={className}>
              <IconPaths name={name} icon={icon} style={style} className={className}/>
            </Transform>
          : <IconPaths key={n} name={name} icon={icon} style={style} className={className}/>
      )
      }
    </svg>
  )
}
*/

export default SVGIcon
