import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon, IconData } from '@/lib/index.js'

it(
  'icon by name',
  () => {
    const { container } = render(
      <Icon name="angle"/>
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
  }
)
