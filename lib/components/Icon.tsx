import Library      from '../Library.js'
import SVGIcon      from '../SVG/Icon.jsx'
import { Themed }   from '../Theme'
import { IconLibrary, SVGIconProps } from '../types.js'
import { resolveIconData, prepareIconProps, classes, splitSpace } from '../utils/index.js'
import { fail, isString } from '@abw/badger-utils'

// TODO: fixedWidth
export type IconComponentProps = {
  name?: string,
  iconsClass?: string,
  library?: IconLibrary,
  className?: string,
}

export const Icon = ({
  name,
  iconsClass='icons',
  library=Library,
  ...props
}: IconComponentProps ) => {
  if (! name) {
    return <SVGIcon {...prepareIconProps(props) as SVGIconProps} />
  }
  try {
    const names = splitSpace(name)
    return names.length === 1
      ? <SVGIcon
          {...props as SVGIconProps}
          {...resolveIconData(name, library, props) as SVGIconProps}
        />
      : <div className={classes(iconsClass, props.className)}>
          { names.map(
            name =>
              <SVGIcon
                key={name}
                {...props as SVGIconProps}
                {...resolveIconData(name, library, props) as SVGIconProps}
              />
          )}
        </div>
  }
  catch(e) {
    const message = isString(e)
      ? e as string
      : (e as Error).message
    fail(`Badger Icon failed to render icon "${name}". ${message}`)
  }
}

export default Themed(Icon, 'Icon')
