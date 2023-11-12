import process from 'node:process'

const SITE_VERSION = JSON.stringify(process.env.npm_package_version)
const SITE_DATE    = JSON.stringify(new Date().toISOString().split('T')[0])

export default {
  SITE_VERSION,
  SITE_DATE
}
