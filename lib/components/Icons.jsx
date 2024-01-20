import React from 'react'
import Icon  from './Icon.jsx'
import { splitSpace } from '../utils/functions.js'

export const Icons = ({
  names,
  className
}) =>
  <div className={`grid overlap ${className}`}>
    { splitSpace(names)
      .map(
        name => <Icon name={name} key={name}/>
      )
    }
  </div>

export default Icons