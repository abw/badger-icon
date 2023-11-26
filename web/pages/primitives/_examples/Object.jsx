import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const BodyObjectExample = () => {
  addIcon(
    'circle-icon',
    {
      element: 'circle',
      cx: 256,
      cy: 256,
      r: 240
    }
  )
  return (
    <Icon name="circle-icon.x6"/>
  )
}

export default BodyObjectExample

