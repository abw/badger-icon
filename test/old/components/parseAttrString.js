import { test, expect } from 'vitest'
import { parseAttrString } from '../../lib/iconData.js'

test(
  'parseAttrString() one attr',
  () => {
    expect(parseAttrString('fill:red'))
      .toMatchObject({
        fill: 'red'
      })
  }
)

test(
  'parseAttrString() no value',
  () => {
    expect(parseAttrString('flip'))
      .toMatchObject({
        flip: undefined
      })
  }
)