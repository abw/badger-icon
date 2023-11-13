import { test, expect } from 'vitest'
import { prepareIconProps } from '@/lib/index.js'

test(
  'prepareIconProps() with size',
  () => expect(
    prepareIconProps({ })
  ).toEqual({
    width:  512,
    height: 512,
    style: {
      fill: 'currentColor'
    }
  })
)
