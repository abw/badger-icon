import React from 'react'
import { Link } from '@abw/badger-website'

// eslint-disable-next-line react/display-name
const ExtLinker = (href, text=href) => (props={}) =>
  <Link href={href} text={text} targetBlank {...props}/>

export const BadgerCSSLink = ExtLinker('https://badgerpower.com/badger-css/', 'Badger CSS')
