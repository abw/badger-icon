import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const AddIconExample = () => {
  addIcon(
    'pyramid',
    'M256,96L64,416L448,416L256,96Z'
  )
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="pyramid"/>
      <Icon name="pyramid-thinner"/>
      <Icon name="pyramid-thicker"/>
      <Icon name="pyramid-down"/>
      <Icon name="pyramid-fill.red.fill-50.stroke-40"/>
      <Icon name="pyramid-fill.orange.fill-50.stroke-40"/>
    </div>
  )
}

export default AddIconExample

