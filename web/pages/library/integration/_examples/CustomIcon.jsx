import React from 'react'
import { Icon as BadgerIcon, MyIconLibrary } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon as BadgerIcon} from '@abw/badger-icon'
// PRETEND: import MyIconLibrary from './path/to/MyIconLibrary.js'

const Icon = props =>
  <BadgerIcon icons={MyIconLibrary} {...props}/>

const IconExample = () =>
  <div className="flex gap-4 wrap x6">
    <Icon name="lightning"/>
    <Icon name="lightning-thinner"/>
    <Icon name="lightning-thinnest"/>
  </div>

export default IconExample

