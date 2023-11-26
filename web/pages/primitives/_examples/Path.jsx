import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const PathExample = () => {
  addIcon(
    'flash',
    {
      path: 'M64,64L64,448C64,448 191,385 256,448C321,511 448,448 448,448L448,64C448,64 320,128 256,64C205,13 64,64 64,64Z',
    }
  )
  return (
    <Icon name="flash.x6"/>
  )
}

export default PathExample

