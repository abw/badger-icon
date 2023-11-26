import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

const LineExample = () => {
  /* START */
  addIcon(
    'slash3',
    'line:16 496 496 16'
  )
  /* END */
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="slash3"/>
      <Icon name="slash3.orange.stroke-40"/>
    </div>
  )
}

export default LineExample

