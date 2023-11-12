import { test, expect } from 'vitest'
import { styleData } from '../../lib/iconData.js'

test(
  'styleData() one style',
  () => {
    expect(styleData('fill:red'))
      .toMatchObject({
        fill: 'red'
      })
  }
)

test(
  'styleData() one style space before colon',
  () => {
    expect(styleData('fill :red'))
      .toMatchObject({
        fill: 'red'
      })
  }
)

test(
  'styleData() one style space after colon',
  () => {
    expect(styleData('fill: red'))
      .toMatchObject({
        fill: 'red'
      })
  }
)

test(
  'styleData() one style spaces around colon',
  () => {
    expect(styleData('fill   :    red'))
      .toMatchObject({
        fill: 'red'
      })
  }
)

test(
  'styleData() multiple styles',
  () => {
    expect(styleData('fill:red;stroke-width:4px'))
      .toMatchObject({
        fill: 'red',
        'stroke-width': '4px'
      })
  }
)

test(
  'styleData() multiple styles space before semi-colon',
  () => {
    expect(styleData('fill:red ;stroke-width:4px'))
      .toMatchObject({
        fill: 'red',
        'stroke-width': '4px'
      })
  }
)

test(
  'styleData() multiple styles space after semi-colon',
  () => {
    expect(styleData('fill:red; stroke-width:4px'))
      .toMatchObject({
        fill: 'red',
        'stroke-width': '4px'
      })
  }
)

test(
  'styleData() multiple styles spaces around semi-colon',
  () => {
    expect(styleData('fill:red  ;  stroke-width:4px'))
      .toMatchObject({
        fill: 'red',
        'stroke-width': '4px'
      })
  }
)

test(
  'styleData() multiple styles spaces everywhere',
  () => {
    expect(styleData('fill   :   red  ;  stroke-width   :  4px'))
      .toMatchObject({
        fill: 'red',
        'stroke-width': '4px'
      })
  }
)

test(
  'styleData() with object',
  () => {
    expect(styleData({ fill: 'red' }))
      .toMatchObject({
        fill: 'red',
      })
  }
)
