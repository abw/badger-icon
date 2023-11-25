import React from 'react'
import { Icon, addIcons } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcons } from '@abw/badger-icon'

const AddIconsExample = () => {
  addIcons({
    pyramid:   'M256,96L64,416L448,416L256,96Z',
    lightning: 'M320,32L160,288L240,288L192,480L352,224L272,224L320,32Z',
  })
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="pyramid"/>
      <Icon name="pyramid-thinner"/>
      <Icon name="pyramid-fill"/>
      <Icon name="lightning"/>
      <Icon name="lightning-thinner"/>
      <Icon name="lightning-fill"/>
    </div>
  )
}

export default AddIconsExample

