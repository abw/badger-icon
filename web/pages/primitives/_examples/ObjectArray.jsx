import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const ArrayExample = () => {
  addIcon(
    'circle-in-square',
    {
      width: 52,
      height: 52,
      array: [
        {
          element: 'circle',
          cx: 26,
          cy: 26,
          r: 16,
        },
        {
          element: 'rect',
          x: 2,
          y: 2,
          rx: 3,
          ry: 3,
          width: 48,
          height: 48,
        },
      ]
    }
  )
  return (
    <Icon name="circle-in-square.x6"/>
  )
}

export default ArrayExample

