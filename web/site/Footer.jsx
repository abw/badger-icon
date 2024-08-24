import React  from 'react'
import Badger from '@/svg/badger-white.svg?react'
import { DATE, VERSION } from './Config.js'

const Footer = () =>
  <footer>
    <div className="flex space middle">
      <a
        href="https://badgerpower.com"
        target="_blank"
        rel="noreferrer"
        className="badgerpower"
      >
        <Badger/>
        Badger Powered
      </a>
      <div className="text-center">
        by <a
          href="https://github.com/abw"
          target="_blank"
          rel="noreferrer">Andy Wardley</a>
      </div>
      <div className="text-right">
        v{VERSION}<br/>
        {DATE}
      </div>
    </div>
  </footer>

export default Footer
