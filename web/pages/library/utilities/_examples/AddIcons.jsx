import React from 'react'
import { Icon, addIcons } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcons } from '@abw/badger-icon'

const AddIconExample = () => {
  addIcons({
    pyramid: 'M256,96L64,416L448,416L256,96Z'
  })
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="pyramid"/>
      <Icon name="pyramid-thinner"/>
      <Icon name="pyramid-thicker"/>
      <Icon name="pyramid-down"/>
      <Icon name="pyramid-fill.orange.fill-50.stroke-40"/>
      <Icon name="pyramid-fill.blue.fill-50.stroke-40"/>
    </div>
  )
}

export default AddIconExample

