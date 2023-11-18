import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from '@/lib/index.js'

const IconData = {
  defaults: {
    width: 24,
    height: 24,
  },
  icons: {
    foo: 'M1,1L23,23',
    bar: {
      width:  48,
      height: 32,
      path: 'M1,1L31,47',
    }
  }
}

const NoDefaultsIconData = {
  icons: {
    foo: 'M1,2L3,4',
  }
}

it(
  'renders icon with default width/height',
  () => {
    const { container } = render(
      <Icon name="foo" iconData={IconData}/>
    )
    // screen.debug()
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 24 24')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching(IconData.icons.foo)
    )
  }
)

it(
  'renders icon with custom width/height',
  () => {
    const { container } = render(
      <Icon name="bar" iconData={IconData}/>
    )
    // screen.debug()
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 48 32')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching(IconData.icons.bar.path)
    )
  }
)

it(
  'renders icon with implicit defaults',
  () => {
    const { container } = render(
      <Icon name="foo" iconData={NoDefaultsIconData}/>
    )
    // screen.debug()
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 512 512')
    )
    expect(icon).toHaveAttribute(
      'style',
      expect.stringMatching('fill: currentColor;')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching(NoDefaultsIconData.icons.foo)
    )
  }
)
