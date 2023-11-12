import { SVGIcon } from '@/lib/index.js'
import React from 'react'

const Home = () =>
  <div>
    <h1>Hello World!</h1>
    <SVGIcon
      path="M448,320L256,128L64,320"
      style={{
        fill:             'none',
        stroke:           'currentColor',
        strokeWidth:      '64px',
        strokeLinecap:    'round',
        strokeLinejoin:   'round',
        strokeMiterlimit: '1.5'
      }}
    />
    <SVGIcon
      path="M448,320L256,128L64,320"
      style={{
        fill:             'none',
        stroke:           'currentColor',
        strokeWidth:      '64px',
        strokeLinecap:    'round',
        strokeLinejoin:   'round',
        strokeMiterlimit: '1.5'
      }}
      transform="rotate:90"
    />
    <SVGIcon
      path="M448,320L256,128L64,320"
      style={{
        fill:             'none',
        stroke:           'currentColor',
        strokeWidth:      '64px',
        strokeLinecap:    'round',
        strokeLinejoin:   'round',
        strokeMiterlimit: '1.5'
      }}
      transform={{
        rotate: 180,
        grow: 8
      }}
    />
    <SVGIcon
      width={24}
      height={24}
      path="M2,2L2,22L22,22L22,2Z"
      style={{
        fill:             'none',
        stroke:           'currentColor',
        strokeWidth:      '6px',
      }}
    />

  </div>

export default Home