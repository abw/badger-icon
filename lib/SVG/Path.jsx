import React from 'react'
import { reactProps } from '../utils/reactify.js'

export const Path = props =>
  <path  {...reactProps(props)}/>
