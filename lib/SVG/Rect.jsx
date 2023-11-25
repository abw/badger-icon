import React from 'react'
import { reactProps } from '../utils/reactify.js'

export const Rect = props =>
  <rect  {...reactProps(props)}/>
