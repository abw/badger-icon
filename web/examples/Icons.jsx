import { Icon } from '@/lib/index.js'
import { splitList } from '@abw/badger-utils'
import React from 'react'

export const Icons = ({names, className=''}) =>
  <div className="grid-fill wrap gap-4 mar-t-4" style={{ '--min-width': '8rem' }}>
    { splitList(names).map(
      name =>
        <div
          key={name}
          className="text-center bgc-100 bgd-0 fgc-30 fgd-70 pad-4 shadow-2"
        >
          <Icon name={name} className={`${className} x4`}/>
          <div className="smallest mar-t-4">{name}</div>
        </div>
    )}
  </div>

export default Icons