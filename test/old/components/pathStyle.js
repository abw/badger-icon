import { test, expect } from 'vitest'
import pathStyle from '../../lib/Styles.js'

test(
  'pathStyle()',
  () => {
    expect(pathStyle())
      .toMatchObject({
        fill:   'none',
        stroke: 'currentColor',
      })
  }
)

test(
  'pathStyle("heavy.line")',
  () => {
    expect(pathStyle('heavy.line'))
      .toMatchObject({
        fill:         'none',
        stroke:       'currentColor',
        strokeWidth:  '64px'
      })
  }
)

test(
  'pathStyle("heavy.round.line")',
  () => {
    expect(pathStyle('heavy.round.line'))
      .toMatchObject({
        fill:             'none',
        stroke:           'currentColor',
        strokeWidth:      '64px',
        strokeLinecap:    'round',
        strokeLinejoin:   'round',
        strokeMiterlimit: '1.5'
      })
  }
)