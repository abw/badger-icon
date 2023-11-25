import React from 'react'
import { reactProps } from '../utils/reactify.js'

export const Polygon = props =>
  <polygon  {...reactProps(props)}/>
