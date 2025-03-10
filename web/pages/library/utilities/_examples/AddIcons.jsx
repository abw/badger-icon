import React from 'react'
import { Icon, addIcons } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcons } from '@abw/badger-icon'

const AddIconsExample = () => {
  addIcons({
    pyramid:   'M256,96L64,416L448,416L256,96Z',
    lightning: 'M320,32L160,288L240,288L192,480L352,224L272,224L320,32Z',
    flash: {
      path: 'M320,32L160,288L240,288L192,480L352,224L272,224L320,32Z',
      type: 'fill'
    },
    infinity: {
      // NOTE: custom width, height and type
      width: 640,
      height: 512,
      type: 'solid',
      "path": "M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"
    },
  })
  return (
    <div className="flex gap-4 wrap x6">
      <Icon name="pyramid"/>
      <Icon name="pyramid-thinner"/>
      <Icon name="pyramid-fill"/>
      <Icon name="lightning"/>
      <Icon name="lightning-thinner"/>
      <Icon name="lightning-fill"/>
      <Icon name="flash"/>
      <Icon name="infinity" className="border"/>
    </div>
  )
}

export default AddIconsExample

