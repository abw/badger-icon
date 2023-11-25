import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const PolygonExample = () => {
  addIcon(
    'polygon',
    {
      body: {
        element: 'polygon',
        points: '64,448 224,160 288,224 448,64 288,352 224,288'
      },
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="polygon-thinner"/>
      <Icon name="polygon-thinner-fill"/>
      <Icon name="polygon-thinner-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default PolygonExample

