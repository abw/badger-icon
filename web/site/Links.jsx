import React from 'react'
import { Link } from '@abw/badger-website'

// eslint-disable-next-line react/display-name
const ExtLinker = (href, text=href) => (props={}) =>
  <Link href={href} text={text} targetBlank {...props}/>

export const BadgerCSSLink = ExtLinker('https://badgerpower.com/badger-css/', 'Badger CSS')
export const IconifyLink = ExtLinker('https://iconify.design/', 'Iconify')
export const ReactOneLouderLink = ExtLinker('https://badgerpower.com/react-one-louder/', 'React One Louder')
export const ViteLink = ExtLinker('https://vitejs.dev/', 'Vite')
export const NextLink = ExtLinker('https://nextjs.org/', 'Next.js')

