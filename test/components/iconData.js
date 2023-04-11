import { test, expect } from 'vitest'
import iconData from '../../lib/iconData.js'

test(
  'iconData() string',
  () => {
    expect(iconData('M1,2L3,4'))
      .toMatchObject({
        width:  512,
        height: 512,
        paths: [
          { d: 'M1,2L3,4' }
        ]
      })
  }
)

test(
  'iconData() object with path string',
  () => {
    expect(iconData({ path: 'M1,2L3,4' }))
      .toMatchObject({
        width:  512,
        height: 512,
        paths: [
          { d: 'M1,2L3,4' }
        ]
      })
  }
)

test(
  'iconData() object with path object',
  () => {
    expect(iconData({ path: { d: 'M1,2L3,4', style: 'fill:red' } }))
      .toMatchObject({
        width:  512,
        height: 512,
        paths: [
          { d: 'M1,2L3,4', style: { fill: 'red' } }
        ]
      })
  }
)

test(
  'iconData() object with paths',
  () => {
    expect(iconData({ paths: [ 'M1,2L3,4' ] }))
      .toMatchObject({
        width:  512,
        height: 512,
        paths: [
          { d: 'M1,2L3,4' }
        ]
      })
  }
)

test(
  'iconData() object with width',
  () => {
    expect(iconData({ width: 100, path: 'M1,2L3,4' }))
      .toMatchObject({
        width:  100,
        height: 512,
        paths: [
          { d: 'M1,2L3,4' }
        ]
      })
  }
)

test(
  'iconData() object with height',
  () => {
    expect(iconData({ height: 200, path: 'M1,2L3,4' }))
      .toMatchObject({
        width:  512,
        height: 200,
        paths: [
          { d: 'M1,2L3,4' }
        ]
      })
  }
)

test(
  'iconData() object with path transform',
  () => {
    expect(iconData({ path: { d: 'M1,2L3,4', transform: 'grow:4' } }))
      .toMatchObject({
        width:  512,
        height: 512,
        paths: [
          {
            d: 'M1,2L3,4',
            transform: {
              x: 0, y: 0, rotate: 0, flipX: false, flipY: false,
              size: 20
            }
          }
        ]
      })
  }
)

test(
  'iconData() object with path transform object',
  () => {
    expect(iconData({ path: { d: 'M1,2L3,4', transform: { grow: 4 } } }))
      .toMatchObject({
        width:  512,
        height: 512,
        paths: [
          {
            d: 'M1,2L3,4',
            transform: {
              x: 0, y: 0, rotate: 0, flipX: false, flipY: false,
              size: 20
            }
          }
        ]
      })
  }
)

test(
  'iconData() object with path style',
  () => {
    expect(iconData({ path: { d: 'M1,2L3,4', style: 'fill:red' } }))
      .toMatchObject({
        width:  512,
        height: 512,
        paths: [
          {
            d: 'M1,2L3,4',
            style: {
              fill: 'red'
            }
          }
        ]
      })
  }
)

test(
  'iconData() object with path style object',
  () => {
    expect(iconData({ path: { d: 'M1,2L3,4', style: { fill: 'red' } } }))
      .toMatchObject({
        width:  512,
        height: 512,
        paths: [
          {
            d: 'M1,2L3,4',
            style: {
              fill: 'red'
            }
          }
        ]
      })
  }
)

test(
  'iconData() object with path class',
  () => {
    expect(iconData({ path: { d: 'M1,2L3,4', class: 'red' } }))
      .toMatchObject({
        width:  512,
        height: 512,
        paths: [
          {
            d: 'M1,2L3,4',
            class: 'red'
          }
        ]
      })
  }
)

test(
  'iconData() object with style',
  () => {
    expect(iconData({ path: 'M1,2L3,4', style: 'fill:red' }))
      .toMatchObject({
        width:  512,
        height: 512,
        style: {
          fill: 'red'
        },
        paths: [
          {
            d: 'M1,2L3,4',
          }
        ]
      })
  }
)

test(
  'iconData() object with style object',
  () => {
    expect(iconData({ path: 'M1,2L3,4', style: { fill: 'red' } } ))
      .toMatchObject({
        width:  512,
        height: 512,
        style: {
          fill: 'red'
        },
        paths: [
          {
            d: 'M1,2L3,4',
          }
        ]
      })
  }
)

test(
  'iconData() object with transform string',
  () => {
    expect(iconData({ path: 'M1,2L3,4', transform: 'grow:2' }))
      .toMatchObject({
        width:  512,
        height: 512,
        transform: {
          size: 18,
          x: 0, y: 0, flipX: false, flipY: false
        },
        paths: [
          {
            d: 'M1,2L3,4',
          }
        ]
      })
  }
)

test(
  'iconData() object with transform object',
  () => {
    expect(iconData({ path: 'M1,2L3,4', transform: { grow: 2 } }))
      .toMatchObject({
        width:  512,
        height: 512,
        transform: {
          size: 18,
          x: 0, y: 0, flipX: false, flipY: false
        },
        paths: [
          {
            d: 'M1,2L3,4',
          }
        ]
      })
  }
)

test(
  'iconData() object with class',
  () => {
    expect(iconData({ path: 'M1,2L3,4', class: 'red' }))
      .toMatchObject({
        width:  512,
        height: 512,
        class: 'red',
        paths: [
          {
            d: 'M1,2L3,4',
          }
        ]
      })
  }
)
