import React from 'react'
import { Icon } from '@/lib/index'

const Component = () => {
  {/* START */}
  const MyIcons = {
    icons: {
      triangle: 'M448,450L256,144L64,450'
    }
  }
  return (
    <div className="flex gap-2 x3">
      <Icon name="triangle"        library={MyIcons}/>
      <Icon name="triangle-right"  library={MyIcons}/>
      <Icon name="triangle-down"   library={MyIcons}/>
      <Icon name="triangle-up"     library={MyIcons}/>
    </div>
  )
}

export default Component