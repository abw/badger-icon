import React from 'react'
import Link from '@/ui/Link.jsx'
import Badger from '@/svg/badger-white.svg?react'
import { Icon } from '@abw/badger-react-ui'
import { Toggle, useTheme } from '@abw/react-night-and-day'
import { SIDEBAR, NO_SIDEBAR } from './Constants.jsx'
import { VERSION } from './Config.js'

const Header = () => {
  const { variant, setVariant } = useTheme()
  return (
    <header>
      <nav>
        <div>
          <Icon
            name="bars"
            className="toggle-sidebar action"
            onClick={() => setVariant(variant === NO_SIDEBAR ? SIDEBAR : NO_SIDEBAR)}
          />
          <Link to="/" className="home mar-l-2" text="Badger Icon"/>
          <span className="small mar-l-2">v{VERSION}</span>
        </div>
        <div className="flex middle gap-4">
          <a
            href="https://badgerpower.com/"
            target="_blank"
            rel="noreferrer">
            <Badger className="badgerpower"/>
          </a>
          <a
            href="https://github.com/abw/badger-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github"/>
          </a>
          <Toggle/>
        </div>
      </nav>
    </header>
  )
}

export default Header
