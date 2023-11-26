import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

const PathExample = () => {
  /* START */
  addIcon(
    'flag3',
    'path:M64,64L64,448C64,448 191,385 256,448C321,511 448,448 448,448L448,64C448,64 320,128 256,64C205,13 64,64 64,64Z',
  )
  /* END */
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="flag3"/>
      <Icon name="flag3-fill"/>
      <Icon name="flag3-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default PathExample

