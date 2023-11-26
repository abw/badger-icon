import React from 'react'
import Body from './Body.jsx'
import { reactProps } from '../utils/reactify.js'

export const Array = ({
  items,
  ...props
}) =>
  <g  {...reactProps(props)}>
    { items.map(
      (b, n) => <Body key={n} body={b}/>
    )}
  </g>

