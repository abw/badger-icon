import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const PolygonExample = () => {
  addIcon(
    'flash',
    {
      element: 'polygon',
      points: '64,448 224,160 288,224 448,64 288,352 224,288'
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="flash-thinner"/>
      <Icon name="flash-thinner-fill"/>
      <Icon name="flash-thinner-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default PolygonExample

