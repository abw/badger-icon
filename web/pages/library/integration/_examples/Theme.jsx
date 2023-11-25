import React from 'react'
import { MyIconLibrary } from '@/web/lib/index.js'
import { Icon, Theme } from '@/lib/index.js'

{/* START */}
// PRETEND: import { Icon, Theme } from '@abw/badger-icon'
// PRETEND: import MyIconLibrary from './path/to/MyIconLibrary.js'

const ThemeExample = () => {
  const MyTheme = {
    Icon: {
      library: MyIconLibrary,
    }
  }
  return (
    <Theme.Provider {...MyTheme}>
      <div className="flex gap-4 wrap x6">
        <Icon name="lightning"/>
        <Icon name="lightning-thinner"/>
        <Icon name="lightning-thinnest"/>
      </div>
    </Theme.Provider>
  )
}

export default ThemeExample

