import React from 'react'
import { Icon, addIcon } from '@/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-react-ui'

const LineExample = () => {
  addIcon(
    'line',
    {
      body: {
        element: 'line',
        x1: 16,
        y1: 16,
        x2: 496,
        y2: 496,
      },
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="line"/>
      <Icon name="line.orange.stroke-40"/>
    </div>
  )
}

export default LineExample

