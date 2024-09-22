// These constants are replaced by Vite.  See the vite.defs.js file in the
// root directory where they are defined.  They are included as the define
// options in vite.config.js
/* eslint-disable no-undef */
import { version, date, copyright } from '@/site/Config.js'

export const site = {
  version,
  date,
  copyright,
  title:      'Badger Icon',
  author:     'Andy Wardley',
  authorLink: 'https://github.com/abw',
  repository: 'https://github.com/abw/badger-icon',
  // repoIcon:   'github',
  badgerpower: true,
  basename:    import.meta.env.BASE_URL,
  // debug:       true,
}

export default site