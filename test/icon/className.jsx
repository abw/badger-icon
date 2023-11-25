import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon, Library } from '@/lib/index.js'

const CustomLibrary = {
  icons: {
    foo: 'M1,1L23,23',
    bar: {
      path: 'M1,1L31,47',
      className: 'wibble'
    },
    baz: {
      path: 'M1,1L31,47',
      type: 'line'
    }
  }
}

it(
  'renders an icon with a className',
  () => {
    const { container } = render(
      <Icon name="angle" className="large"/>
    )
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveClass('large')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 512 512')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching(Library.icons.angle.replace(/^line:/, ''))
    )
  }
)

it(
  'renders an icon with a dotted className',
  () => {
    const { container } = render(
      <Icon name="angle.large"/>
    )
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveClass('large')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 512 512')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching(Library.icons.angle.replace(/^line:/, ''))
    )
  }
)

it(
  'renders an icon with multiple dotted className',
  () => {
    const { container } = render(
      <Icon name="angle.large.red"/>
    )
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveClass('large')
    expect(icon).toHaveClass('red')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 512 512')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching(Library.icons.angle.replace(/^line:/, ''))
    )
  }
)

it(
  'renders an icon with className in icon data',
  () => {
    const { container } = render(
      <Icon name="bar" library={CustomLibrary}/>
    )
    // screen.debug()
    const icon = container.querySelector('svg.icon')
    const path = icon.querySelector('path')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveClass('wibble')
    expect(icon).toHaveAttribute(
      'viewBox',
      expect.stringMatching('0 0 512 512')
    )
    expect(icon).toHaveAttribute(
      'style',
      expect.stringMatching('fill: currentColor')
    )
    expect(path).toHaveAttribute(
      'd',
      expect.stringMatching(CustomLibrary.icons.bar.path)
    )
  }
)

