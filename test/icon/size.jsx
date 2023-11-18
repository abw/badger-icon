import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from '@/lib/index.js'

it(
  'icon with size',
  () => {
    const { container } = render(
      <Icon size={24} path="M1,1L23,23"/>
    )
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 24 24')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching('M1,1L23,23')
    )
  }
)

it(
  'icon with width and height',
  () => {
    const { container } = render(
      <Icon width={32} height={24} path="M1,1L23,31"/>
    )
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 32 24')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching('M1,1L23,31')
    )
  }
)
