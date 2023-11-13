import { test, expect } from 'vitest'
import { styleData } from '@/lib/index.js'

test(
  'styleData() should handle empty string',
  () => expect(
    styleData('')
  ).toEqual({
  })
)

test(
  'styleData() fill',
  () => expect(
    styleData('fill')
  ).toEqual({
    fill: 'currentColor'
  })
)

test(
  'styleData() fill=red',
  () => expect(
    styleData('fill=red')
  ).toEqual({
    fill: 'red'
  })
)

test(
  'styleData() stroke',
  () => expect(
    styleData('stroke')
  ).toEqual({
    stroke: 'currentColor'
  })
)

test(
  'styleData() stroke=blue',
  () => expect(
    styleData('stroke=blue')
  ).toEqual({
    stroke: 'blue'
  })
)

test(
  'styleData() strokeWidth=2px',
  () => expect(
    styleData('strokeWidth=2px')
  ).toEqual({
    strokeWidth: '2px'
  })
)

test(
  'styleData() strokeWidth=2',
  () => expect(
    styleData('strokeWidth=2')
  ).toEqual({
    strokeWidth: '8.84%'
  })
)

test(
  'styleData() thin',
  () => expect(
    styleData('thin')
  ).toEqual({
    strokeWidth: '6.63%'
  })
)
