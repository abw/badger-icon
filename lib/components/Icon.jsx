import React        from 'react'
import Library      from '../Library.js'
import SVGIcon      from '../SVG/Icon.jsx'
import { Themed }   from '../Theme.js'
import { resolveIconData, prepareIconProps, classes, splitSpace } from '../utils/index.js'

// TODO: fixedWidth

export const Icon = ({
  name,
  iconsClass='icons',
  library=Library,
  ...props
}) => {
  if (! name) {
    return <SVGIcon {...prepareIconProps(props)} />
  }
  const names = splitSpace(name)
  return names.length === 1
    ? <SVGIcon
        {...props}
        {...resolveIconData(name, library, props)}
      />
    : <div className={classes(iconsClass, props.className)}>
        { names.map(
          name =>
            <SVGIcon
              key={name}
              {...props}
              {...resolveIconData(name, library, props)}
            />
        )}
      </div>
}

export default Themed(Icon, 'Icon')
