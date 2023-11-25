import React from 'react'
import { Icon, MyIconLibrary } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-icon'
// PRETEND: import MyIconLibrary from './path/to/MyIconLibrary.js'

const LightningExample = () =>
  <div className="flex gap-4 wrap x6">
    <Icon
      name="lightning"
      library={MyIconLibrary}
    />
    <Icon
      name="lightning-thinner"
      library={MyIconLibrary}
    />
    <Icon
      name="lightning-thinnest"
      library={MyIconLibrary}
    />
  </div>

export default LightningExample

