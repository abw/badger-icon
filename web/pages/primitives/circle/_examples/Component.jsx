import React from 'react'
import { Icon, addIcon } from '@/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const CircleExample = () => {
  addIcon(
    'circle',
    {
      body: {
        element: 'circle',
        cx: 256,
        cy: 256,
        r: 240
      }
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="circle"/>
      <Icon name="circle-fill"/>
      <Icon name="circle-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default CircleExample

