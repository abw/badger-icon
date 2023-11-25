import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const EllipseExample = () => {
  addIcon(
    'ellipse',
    {
      body: {
        element: 'ellipse',
        cx: 256,
        cy: 256,
        rx: 240,
        ry: 120
      }
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="ellipse"/>
      <Icon name="ellipse-fill"/>
      <Icon name="ellipse-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default EllipseExample

