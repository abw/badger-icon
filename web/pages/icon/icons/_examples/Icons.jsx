import React from 'react'
import { Icon } from '@/lib/index.js'

const Component = () => {
  {/* START */}
  const MyIcons = {
    icons: {
      angle: 'line:M448,450L256,144L64,450'
    }
  }
  return (
    <div className="flex gap-2 x3">
      <Icon name="angle"        icons={MyIcons}/>
      <Icon name="angle-right"  icons={MyIcons}/>
      <Icon name="angle-down"   icons={MyIcons}/>
      <Icon name="angle-up"     icons={MyIcons}/>
    </div>
  )
}

export default Component