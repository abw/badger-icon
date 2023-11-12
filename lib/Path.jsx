import React from 'react'
// import { isString } from '@abw/badger-utils'

export const Path = props =>
  <path {...props}/>


/*
export const Path = ({
  path,
  ...props
}) =>
  isString(path)
    ? <path d={path} {...props}/>
    : <PathWithAttrs path={path} {...props}/>

export const PathWithAttrs = ({
  path,
  ...props
}) => {
  const { d, ...pathProps } = path
  // Hmmm... what if we have style, opacity, etc., in props and pathProps?

  return (
    <path
      d={d}
      {...props}
      {...pathProps}
    />
  )
}
*/