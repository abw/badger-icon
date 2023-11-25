import React from 'react'
import { Icon, addIcon } from '@/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-react-ui'

const PathExample = () => {
  addIcon(
    'path',
    {
      body: {
        element: 'path',
        d: 'M64,64L64,448C64,448 191,385 256,448C321,511 448,448 448,448L448,64C448,64 320,128 256,64C205,13 64,64 64,64Z',
      },
    }
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="path"/>
      <Icon name="path-fill"/>
      <Icon name="path-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default PathExample

