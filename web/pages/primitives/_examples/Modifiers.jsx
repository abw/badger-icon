import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const ModifiersExample = () => {
  addIcon(
    'modified',
    [
      {
        path: 'M64,64L64,192',
        modifiers: 'thinner'
      },
      {
        path: 'M192,64L192,256',
        modifiers: 'thin'
      },
      {
        path: 'M320,64L320,320'
      },
      {
        path: 'M447.755,64L448,384',
        modifiers: 'thick'
      },
      {
        rect: '64 384 64 64',
        modifiers: 'solid'
      },
      {
        rect: '192 384 64 64',
        modifiers: 'thinner-bevel-stroke=darkred-opacity=0.5'
      },
    ]
  )
  return (
    <div className="flex gap-4 x6">
      <Icon name="modified"/>
    </div>
  )
}

export default ModifiersExample
