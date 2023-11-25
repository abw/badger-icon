import React from 'react'
import { reactProps } from '../utils/reactify.js'

export const Circle = props =>
  <circle {...reactProps(props)}/>
