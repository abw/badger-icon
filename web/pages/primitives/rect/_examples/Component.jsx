import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const RectExample = () => {
  addIcon(
    'rect',
    {
      element: 'rect',
      x: 16,
      y: 16,
      width: 480,
      height: 480,
      rx: 32,
      ry: 32,
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="rect"/>
      <Icon name="rect-fill"/>
      <Icon name="rect-fill.orange.flc-50.stc-40"/>
    </div>
  )
}

export default RectExample

