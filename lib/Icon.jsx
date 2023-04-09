import React from 'react'
import iconlib from './iconlib.js'
import { classNames } from './Utils/index.js'
import { fail, isString } from '@abw/badger-utils'
import { Transform } from './Transform.jsx'
import pathStyle from './Styles.js'

const faProps = {
  fixedWidth: 'fa-fw',
  spin: ' fa-spin',
}

export const Icon = ({icons=iconlib, transform, ...props}) => {
  // icon can be specified as "icon" or "name" property and can be a string
  // like "badger spin" where anything after the first icon name is added as
  // a fa-XXX class
  const spec  = props.icon || props.name
  const [name, ...styles] = spec.split('.')
  const pStyle = pathStyle(styles)

  /*
  console.log('spec: ', spec)
  console.log('styles: ', styles)
  console.log('pathStyle: ', pStyle)
  */


  // lookup the icon in the icons library
  const icon = getIcon(name, icons)

  if (! icon) {
    console.log(`Invalid icon name: ${name}`)
    return null
  }
  // pull out the pertinent data
  const { minx, miny, width, height, style } = icon

  // construct a className from the className, color and/or size properties
  const className = classNames(props, faProps)

  return (
    <svg
      aria-hidden="true" focusable="false"
      className={`svg-inline--fa icon ${className}`}
      role="img" xmlns="http://www.w3.org/2000/svg"
      viewBox={`${minx||0} ${miny||0} ${width} ${height}`}
      style={style && ReactStyle(style)}
      onClick={props.onClick}
    >
      { transform
        ? <Transform icon={icon} transform={transform}>
            <IconPaths name={name} icon={icon} style={pStyle}/>
          </Transform>
        : <IconPaths name={name} icon={icon} style={pStyle}/>
      }
    </svg>
  )
}

const IconPaths = ({icon, style}) => {
  const {paths, path} = icon
  if (paths) {
    return paths.map(
      (path, n) => <Path path={path} key={n} style={style}/>
    )
  }
  if (path) {
    return <Path path={path} style={style}/>
  }
  console.log('No path or paths for icon')
}

const Path = ({path, style}) =>
  isString(path)
    ? <path fill="currentColor" d={path} style={style}/>
    : <PathWithAttrs path={path} style={style}/>

const PathWithAttrs = ({path, style}) => {
  const {d, opacity=null} = path

  // const {d, opacity=null, style=null} = path

  return <path
    d={d}
    fill="currentColor"
    opacity={opacity}
    style={style}
  />
}

function ReactStyle(style) {
  // e.g. fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round
  // converted to object with React camel case: { fillRule: 'evenodd', etc }
  return [ ...style.matchAll(/\s*([\w-]*?)\s*:\s*(.*?)(;|$)/g)]
    .map( match => match.slice(1, 3) )
    .reduce(
      (hash, [key, value]) => {
        hash[key.replace(/-./g, x => x[1].toUpperCase())] = value
        return hash
      },
      { }
    )
}

const getIcon = (name, icons=iconlib) => {
  const icon = icons[name] || fail(`Invalid icon specified: ${name}`)
  return isString(icon)
    ? {
        width:  512,
        height: 512,
        path: icon
      }
    : icon
}

export default Icon
