import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

const RectExample = () => {
  /* START */
  addIcon(
    'rect3',
    'rect:16 16 480 480 32 32'
  )
  /* END */
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="rect3"/>
      <Icon name="rect3-fill"/>
      <Icon name="rect3-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default RectExample

