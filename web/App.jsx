import React from 'react'
import site from './config/site.jsx'
import sidebar from './config/sidebar.jsx'
import { SiteProvider } from '@abw/badger-website'
import './styles/badger-icon.scss'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.jsx',
  { eager: true }
)

const App = () =>
  <SiteProvider
    site={site}
    pages={pages}
    sidebar={sidebar}
  />

export default App