import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from '@/lib/index'

const CustomLibrary = {
  icons: {
    rect: 'rect:10 12 22 24',
    circle: 'circle:50 60 10',
    ellipse: 'ellipse:50 60 10 12',
    line: 'line:10 20 30 40',
    polygon: 'polygon:10 20 30 40',
    polyline: 'polyline:10 20 30 40',
    array: [
      'rect:10 12 22 24',
      'circle:50 60 10',
    ]
  }
}

it(
  'renders a rect',
  () => {
    const { container } = render(
      <Icon name="rect" library={CustomLibrary}/>
    )
    const icon = container.querySelector('svg.icon')
    const rect = icon.querySelector('rect')
    expect(rect).toHaveAttribute(
      'x',
      expect.stringMatching('10')
    )
    expect(rect).toHaveAttribute(
      'y',
      expect.stringMatching('12')
    )
    expect(rect).toHaveAttribute(
      'width',
      expect.stringMatching('22')
    )
    expect(rect).toHaveAttribute(
      'height',
      expect.stringMatching('24')
    )
  }
)

it(
  'renders a circle',
  () => {
    const { container } = render(
      <Icon name="circle" library={CustomLibrary}/>
    )
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

it(
  'renders an ellipse',
  () => {
    const { container } = render(
      <Icon name="ellipse" library={CustomLibrary}/>
    )
    const icon = container.querySelector('svg.icon')
    const ellipse = icon.querySelector('ellipse')
    expect(ellipse).toHaveAttribute(
      'cx',
      expect.stringMatching('50')
    )
    expect(ellipse).toHaveAttribute(
      'cy',
      expect.stringMatching('60')
    )
    expect(ellipse).toHaveAttribute(
      'rx',
      expect.stringMatching('10')
    )
    expect(ellipse).toHaveAttribute(
      'ry',
      expect.stringMatching('12')
    )
  }
)

it(
  'renders a line',
  () => {
    const { container } = render(
      <Icon name="line" library={CustomLibrary}/>
    )
    const icon = container.querySelector('svg.icon')
    const line = icon.querySelector('line')
    expect(line).toHaveAttribute(
      'x1',
      expect.stringMatching('10')
    )
    expect(line).toHaveAttribute(
      'y1',
      expect.stringMatching('20')
    )
    expect(line).toHaveAttribute(
      'x2',
      expect.stringMatching('30')
    )
    expect(line).toHaveAttribute(
      'y2',
      expect.stringMatching('40')
    )
  }
)

it(
  'renders a polygon',
  () => {
    const { container } = render(
      <Icon name="polygon" library={CustomLibrary}/>
    )
    const icon = container.querySelector('svg.icon')
    const polygon = icon.querySelector('polygon')
    expect(polygon).toHaveAttribute(
      'points',
      expect.stringMatching('10 20 30 40')
    )
  }
)

it(
  'renders a polyline',
  () => {
    const { container } = render(
      <Icon name="polyline" library={CustomLibrary}/>
    )
    const icon = container.querySelector('svg.icon')
    const polyline = icon.querySelector('polyline')
    expect(polyline).toHaveAttribute(
      'points',
      expect.stringMatching('10 20 30 40')
    )
  }
)

it(
  'renders an array',
  () => {
    const { container } = render(
      <Icon name="array" library={CustomLibrary}/>
    )
    const icon = container.querySelector('svg.icon')
    const rect = icon.querySelector('rect')
    expect(rect).toHaveAttribute(
      'x',
      expect.stringMatching('10')
    )
    expect(rect).toHaveAttribute(
      'y',
      expect.stringMatching('12')
    )
    expect(rect).toHaveAttribute(
      'width',
      expect.stringMatching('22')
    )
    expect(rect).toHaveAttribute(
      'height',
      expect.stringMatching('24')
    )

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
