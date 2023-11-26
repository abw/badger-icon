import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

const EllipseExample = () => {
  /* START */
  addIcon(
    'lens2',
    {
      ellipse: '256 256 240 120'
    }
  )
  /* END */
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="lens2"/>
      <Icon name="lens2-fill"/>
      <Icon name="lens2-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default EllipseExample
