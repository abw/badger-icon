import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from '@/lib/index'

it(
  'icon with transforms string',
  () => {
    const { container } = render(
      <Icon name="angle" transform="flip-x"/>
    )
    // screen.debug()
    const icon  = container.querySelector('svg.icon')
    const g1 = icon.querySelector('g')
    expect(g1).toHaveAttribute(
      'transform',
      expect.stringMatching(/translate\(256 256\)/)
    )
    const g2 = g1.querySelector('g')
    expect(g2).toHaveAttribute(
      'transform',
      expect.stringMatching(/scale\(-1, 1\)/)
    )
  }
)
