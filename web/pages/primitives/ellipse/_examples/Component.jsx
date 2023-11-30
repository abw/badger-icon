import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const EllipseExample = () => {
  addIcon(
    'lens',
    {
      element: 'ellipse',
      cx: 256,
      cy: 256,
      rx: 240,
      ry: 120
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="lens"/>
      <Icon name="lens-fill"/>
      <Icon name="lens-fill.orange.flc-50.stc-40"/>
    </div>
  )
}

export default EllipseExample

