import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

const PolylineExample = () => {
  /* START */
  addIcon(
    'polyline2',
    {
      polyline: '192,384 128,448 64,384 256,64 448,384 384,448 320,384'
    }
  )
  /* END */
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="polyline2-thinner"/>
      <Icon name="polyline2-thinner-fill"/>
      <Icon name="polyline2-thinner-fill.orange.flc-50.stc-40"/>
    </div>
  )
}

export default PolylineExample

