import { defineConfig } from 'vite'
import jsconfigPaths    from 'vite-jsconfig-paths'
import svgr             from 'vite-plugin-svgr'
import react            from '@vitejs/plugin-react'
import define           from  './vite.defs.js'
import copy             from 'rollup-plugin-copy'
import dts              from 'vite-plugin-dts'

const NAME   = `badger-icon`
const MODULE = `abw/${NAME}`

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    jsconfigPaths(),
    dts()
  ],
  define,
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['test/setup.js', 'test/lib', 'test/old']
  },
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: 'lib/index.ts',
      name: MODULE,
      fileName: NAME,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
      plugins: [
        copy({
          hook: 'writeBundle',
          targets: [
            {
              src: 'styles/*',
              dest: 'dist/styles',
            }
          ]
        })
      ]
    }
  },
})
