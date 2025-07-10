import React from 'react'
import { Icon, addIcon } from '@/web/lib/index.js'

{/* START */}
// PRETEND: import { Icon, addIcon } from '@abw/badger-icon'

const BodyStringExample = () => {
  addIcon(
    'beer',
    {
      type: null,
      width: 24,
      height: 24,
      svg: `
        <mask id="lineMdBeerAltTwotoneLoop0">
          <g>
            <g>
              <path
                fill="none"
                stroke="#fff"
                stroke-width="2"
                d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2"
              />
              <path
                fill="#fff"
                fill-opacity="0.3"
                d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z"
              />
              <animateMotion
                calcMode="linear"
                dur="3s"
                path="M0 0h10"
                repeatCount="indefinite"
              />
            </g>
            <animateMotion
              fill="freeze"
              begin="0.7s"
              calcMode="linear"
              dur="0.3s"
              path="M0 0v-16"
            />
          </g>
        </mask>
        <path
          fill="none"
          stroke="currentColor"
          stroke-dasharray="64"
          stroke-dashoffset="64"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18 3l-2 18h-9l-2 -18Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          />
        </path>
        <path
          fill="currentColor"
          d="M18 3l-2 18h-9l-2 -18Z"
          mask="url(#lineMdBeerAltTwotoneLoop0)"
        />
      `
    }
  )
  return (
    <div className="flex gap-4 x6">
      <Icon name="beer.red.fgc-50"/>
      <Icon name="beer.green.fgc-50"/>
      <Icon name="beer.blue.fgc-50"/>
    </div>
  )
}

export default BodyStringExample
