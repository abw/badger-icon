import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

const PolygonExample = () => {
  /* START */
  addIcon(
    'flash2',
    {
      polygon: '64,448 224,160 288,224 448,64 288,352 224,288'
    }
  )
  /* END */
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="flash2-thinner"/>
      <Icon name="flash2-thinner-fill"/>
      <Icon name="flash2-thinner-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default PolygonExample

