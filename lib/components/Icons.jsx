import React from 'react'
import Icon  from './Icon.jsx'
import { splitList } from '@abw/badger-utils'

export const Icons = ({
  names,
  className
}) =>
  <div className={`grid overlap ${className}`}>
    { splitList(names)
      .map(
        name => <Icon name={name} key={name}/>
      )
    }
  </div>

export default Icons