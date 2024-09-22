import React from 'react'
import site from './config/site.jsx'
import sidebar from './config/sidebar.jsx'
import { SiteProvider } from '@abw/badger-website'
import './styles/badger-icon.scss'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.{jsx,mdx}',
  { eager: true }
)

const snippets = import.meta.glob(
  './snippets/**/*',
  {
    query: '?raw',
    import: 'default',
  }
)

const App = () =>
  <SiteProvider
    site={site}
    pages={pages}
    sidebar={sidebar}
    snippets={snippets}
    prevNextArrows
  />

export default App