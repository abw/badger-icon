import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from '@/lib/index'

const CustomLibrary = {
  icons: {
    foo: '<circle cx="50" cy="60" r="10">',
  }
}

it(
  'renders an icon with an svg string',
  () => {
    console.log(`pre`)

    const { container } = render(
      <Icon name="foo" library={CustomLibrary}/>
    )
    console.log(`post`)
    // screen.debug()
    const icon = container.querySelector('svg.icon')
    const circle = icon.querySelector('circle')
    expect(circle).toHaveAttribute(
      'cx',
      expect.stringMatching('50')
    )
    expect(circle).toHaveAttribute(
      'cy',
      expect.stringMatching('60')
    )
    expect(circle).toHaveAttribute(
      'r',
      expect.stringMatching('10')
    )
  }
)
