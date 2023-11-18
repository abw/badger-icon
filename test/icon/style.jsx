import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon, IconData } from '@/lib/index.js'

it(
  'icon with style string',
  () => {
    const { container } = render(
      <Icon name="angle" style="fill: red"/>
    )
    // screen.debug()
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 512 512')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching(IconData.icons.angle.replace(/^line:/, ''))
    )
    expect(icon).toHaveAttribute(
      'style',
      expect.stringMatching('fill: red')
    )
  }
)

it(
  'icon with style object',
  () => {
    const { container } = render(
      <Icon name="angle" style={{ fill: 'blue', strokeWidth: '23' }}/>
    )
    // screen.debug()
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 512 512')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching(IconData.icons.angle.replace(/^line:/, ''))
    )
    expect(icon).toHaveAttribute(
      'style',
      expect.stringMatching('fill: blue')
    )
    expect(icon).toHaveAttribute(
      'style',
      expect.stringMatching('stroke-width: 23')
    )
  }
)
