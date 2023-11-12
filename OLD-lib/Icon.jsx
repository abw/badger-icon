import React from 'react'
import iconlib from './singlelib.js'
import { classNames } from './Utils/index.js'
import { fail, isString, splitList } from '@abw/badger-utils'
import { Transform } from './Transform.jsx'
import pathStyle from './Styles.js'
import { parseSpec } from './Parse.js'

const faProps = {
  fixedWidth: 'fa-fw',
  spin: ' fa-spin',
}

export const Icon = ({icons=iconlib, className='', transform, ...props}) => {
  const names = splitList(props.icon || props.name)
  const specs = names.map( name => parseSpec(name, icons) )
  /*
  console.log('spec: ', spec)
  console.log('styles: ', styles)
  console.log('pathStyle: ', pStyle)
  */
  console.log('specs: ', specs)


  // lookup the icon in the icons library
  //const icon = getIcon(name, icons)
  const icon = specs[0]

  //if (! icon) {
  //  console.log(`Invalid icon name: ${name}`)
  //  return null
  //}
  // pull out the pertinent data

  const { minx=0, miny=0, width, height, style } = icon.icon

  // construct a className from the className, color and/or size properties
  // const className = classNames(props, faProps)
  // const className = ''

  return (
    <svg
      aria-hidden="true" focusable="false"
      className={`svg-inline--fa icon ${className}`}
      role="img" xmlns="http://www.w3.org/2000/svg"
      viewBox={`${minx} ${miny} ${width} ${height}`}
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

const IconPaths = ({icon, style, className=''}) => {
  const {paths, path} = icon
  if (paths) {
    return paths.map(
      (path, n) => <Path path={path} key={n} style={style} className={className}/>
    )
  }
  if (path) {
    return <Path path={path} style={style} className={className}/>
  }
  console.log('No path or paths for icon')
}

const Path = ({path, style, className}) =>
  isString(path)
    ? <path fill="currentColor" d={path} style={style} className={className}/>
    : <PathWithAttrs path={path} style={style} className={className}/>

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
