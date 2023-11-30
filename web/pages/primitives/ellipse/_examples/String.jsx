import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

const EllipseExample = () => {
  /* START */
  addIcon(
    'lens3',
    'ellipse:256 256 240 120'
  )
  /* END */
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="lens3"/>
      <Icon name="lens3-fill"/>
      <Icon name="lens3-fill.orange.flc-50.stc-40"/>
    </div>
  )
}

export default EllipseExample

