import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const CircleExample = () => {
  addIcon(
    'moon',
    {
      element: 'circle',
      cx: 256,
      cy: 256,
      r: 240
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="moon"/>
      <Icon name="moon-fill"/>
      <Icon name="moon-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default CircleExample

