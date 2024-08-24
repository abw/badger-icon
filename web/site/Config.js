// These constants are replaced by Vite.  See the vite.defs.js file in the
// root directory where they are defined.  They are included as the define
// options in vite.config.js

/* eslint-disable no-undef */
export const VERSION = SITE_VERSION
export const DATE    = SITE_DATE

export const start = '2022'
export const year  = DATE.match(/^(\d+)/)[1]
export const years = year === start ? year : `${start} - ${year}`