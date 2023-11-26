import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

const CircleExample = () => {
  /* START */
  addIcon(
    'moon2',
    {
      circle: '256 256 240'
    }
  )
  /* END */
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="moon2"/>
      <Icon name="moon2-fill"/>
      <Icon name="moon2-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default CircleExample

