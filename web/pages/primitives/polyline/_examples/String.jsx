import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

const PolylineExample = () => {
  /* START */
  addIcon(
    'polyline3',
    'polyline:192,384 128,448 64,384 256,64 448,384 384,448 320,384'
  )
  /* END */
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="polyline3-thinner"/>
      <Icon name="polyline3-thinner-fill"/>
      <Icon name="polyline3-thinner-fill.orange.flc-50.stc-40"/>
    </div>
  )
}

export default PolylineExample

