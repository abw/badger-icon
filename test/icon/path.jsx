import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from '@/lib/index'

it(
  'icon with path',
  () => {
    const { container } = render(
      <Icon path="M1,2L511,512"/>
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
      expect.stringMatching('M1,2L511,512')
    )
  }
)
