import React from 'react'
import { DEFAULT_ICON_HEIGHT, DEFAULT_ICON_WIDTH } from './constants.js'
import Transform from './Transform.jsx'
import { Path } from './SVG/Path.jsx'
import { reactifty } from './utils/reactify.js'

export const SVGIcon = ({
  path,
  onClick,
  minx=0,
  miny=0,
  width=DEFAULT_ICON_WIDTH,
  height=DEFAULT_ICON_HEIGHT,
  style,
  transform,
  className='',
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
    { transform
      ? <Transform
          width={width}
          height={height}
          transform={transform}
        >
          <Path d={path}/>
        </Transform>
      : <Path d={path}/>
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
