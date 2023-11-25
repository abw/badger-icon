import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon, Library } from '@/lib/index.js'

it(
  'icon with dashed type',
  () => {
    const { container } = render(
      <Icon name="angle-fill"/>
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
      expect.stringMatching(Library.icons.angle.replace(/^line:/, ''))
    )
    expect(icon).toHaveAttribute(
      'style',
      expect.stringMatching('fill: currentColor')
    )
  }
)

it(
  'icon with explicit type',
  () => {
    const { container } = render(
      <Icon name="angle" type="fill"/>
    )
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 512 512')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching(Library.icons.angle.replace(/^line:/, ''))
    )
    expect(icon).toHaveAttribute(
      'style',
      expect.stringMatching('fill: currentColor')
    )
  }
)
