import { defineConfig } from 'vite'
import jsconfigPaths    from 'vite-jsconfig-paths'
import svgr             from 'vite-plugin-svgr'
import react            from '@vitejs/plugin-react'
import define           from  './vite.defs.js'
import fs               from 'node:fs'

const https = {
  key:  fs.readFileSync('etc/certs/badger-icon.local.wardley.org.key'),
  cert: fs.readFileSync('etc/certs/badger-icon.local.wardley.org.crt'),
}

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    jsconfigPaths({ root: '../' })
  ],
  define,
  root: 'web',
  base: '/badger-icon',
  envDir: '../',
  build: {
    emptyOutDir: true,
    outDir: '../docs'
  },
  server: {
    host: 'badger-icon.local.wardley.org',
    port: 3013,
    https
  }
})
