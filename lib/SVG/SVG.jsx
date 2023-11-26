import React from 'react'
import { reactProps } from '../utils/reactify.js'

export const SVG = ({
  svg,
  ...props
}) =>
  <g dangerouslySetInnerHTML={{ __html: svg }} {...reactProps(props)}/>
