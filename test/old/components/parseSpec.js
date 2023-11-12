import { test, expect } from 'vitest'
import { parseSpec } from '../../lib/Parse.js'

const icons = {
  'foo':     true,
  'foo-bar': true,
}

test(
  'parseSpec("foo")',
  () => {
    expect(parseSpec('foo', icons))
      .toMatchObject({
        name:   'foo',
      })
  }
)

test(
  'parseSpec("foo-bar")',
  () => {
    expect(parseSpec('foo-bar', icons))
      .toMatchObject({
        name:   'foo-bar',
      })
  }
)

test(
  'parseSpec("foo.bar.baz")',
  () => {
    expect(parseSpec('foo.bar.baz', icons))
      .toMatchObject({
        name:   'foo',
        className: 'bar baz'
      })
  }
)

test(
  'parseSpec("foo.bar.baz?color=#ff7f00&opacity=50%")',
  () => {
    expect(parseSpec('foo.bar.baz?color=#ff7f00&opacity=50%', icons))
      .toMatchObject({
        name:   'foo',
        className: 'bar baz',
        style: {
          color: '#ff7f00',
          opacity: '50%'
        }
      })
  }
)

test(
  'parseSpec("foo-line")',
  () => {
    expect(parseSpec('foo-line', icons))
      .toMatchObject({
        name:   'foo',
        className: '',
        style: {
          fill:    'none',
          stroke:  'currentColor',
        }
      })
  }
)
test(
  'parseSpec("foo-flip")',
  () => {
    expect(parseSpec('foo-flip', icons))
      .toMatchObject({
        name:   'foo',
        className: '',
        transform: {
          flipX: true
        }
      })
  }
)
