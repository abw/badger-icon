import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const LineExample = () => {
  addIcon(
    'slash',
    {
      element: 'line',
      x1: 16,
      y1: 496,
      x2: 496,
      y2: 16,
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="slash"/>
      <Icon name="slash.orange.stc-40"/>
    </div>
  )
}

export default LineExample

