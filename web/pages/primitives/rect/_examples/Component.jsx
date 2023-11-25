import React from 'react'
import { Icon, addIcon } from '@/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-react-ui'

const RectExample = () => {
  addIcon(
    'rect',
    {
      body: {
        element: 'rect',
        x: 16,
        y: 16,
        rx: 32,
        ry: 32,
        width: 480,
        height: 480,
      },
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="rect"/>
      <Icon name="rect-fill"/>
      <Icon name="rect-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default RectExample

