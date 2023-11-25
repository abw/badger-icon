import React from 'react'
import { Icon, addIcon } from '@/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const BodyArrayExample = () => {
  addIcon(
    'circle-in-square',
    {
      body: [
        {
          element: 'circle',
          cx: 256,
          cy: 256,
          r: 160,
        },
        {
          element: 'rect',
          x: 16,
          y: 16,
          rx: 32,
          ry: 32,
          width: 480,
          height: 480,
        },
      ]
    }
  )
  return (
    <Icon name="circle-in-square.x6"/>
  )
}

export default BodyArrayExample

