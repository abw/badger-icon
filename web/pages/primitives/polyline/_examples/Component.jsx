import React from 'react'
import { Icon, addIcon } from '@/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-react-ui'

const PolylineExample = () => {
  addIcon(
    'polyline',
    {
      body: {
        element: 'polyline',
        points: '192,384 128,448 64,384 256,64 448,384 384,448 320,384'
      },
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="polyline-thinner"/>
      <Icon name="polyline-thinner-fill"/>
      <Icon name="polyline-thinner-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default PolylineExample

