import { test, expect } from 'vitest'
import { transformData } from '../../lib/iconData.js'

test(
  'transformData() grow:1',
  () => {
    expect(transformData('grow:1'))
      .toMatchObject({
        size: 17,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
      })
  }
)

test(
  'transformData() shrink:2',
  () => {
    expect(transformData('shrink:2'))
      .toMatchObject({
        size: 14,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
      })
  }
)

test(
  'transformData() right:3',
  () => {
    expect(transformData('right:3'))
      .toMatchObject({
        size: 16,
        x: 3,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
      })
  }
)

test(
  'transformData() left:4',
  () => {
    expect(transformData('left:4'))
      .toMatchObject({
        size: 16,
        x: -4,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
      })
  }
)

test(
  'transformData() up:5',
  () => {
    expect(transformData('up:5'))
      .toMatchObject({
        size: 16,
        x: 0,
        y: -5,
        flipX: false,
        flipY: false,
        rotate: 0
      })
  }
)

test(
  'transformData() down:6',
  () => {
    expect(transformData('down:6'))
      .toMatchObject({
        size: 16,
        x: 0,
        y: 6,
        flipX: false,
        flipY: false,
        rotate: 0
      })
  }
)

test(
  'transformData() flipX',
  () => {
    expect(transformData('flipX'))
      .toMatchObject({
        size: 16,
        x: 0,
        y: 0,
        flipX: true,
        flipY: false,
        rotate: 0
      })
  }
)

test(
  'transformData() flipY',
  () => {
    expect(transformData('flipY'))
      .toMatchObject({
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: true,
        rotate: 0
      })
  }
)

test(
  'transformData() rotate',
  () => {
    expect(transformData('rotate:123'))
      .toMatchObject({
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 123
      })
  }
)

test(
  'transformData() multiple',
  () => {
    expect(transformData('shrink:2;grow:3;left:4;right:5;up:6;down:7;flipX;flipY;rotate:10;rotate:20;rotate:40'))
      .toMatchObject({
        size: 17,
        x: 1,
        y: 1,
        flipX: true,
        flipY: true,
        rotate: 40
      })
  }
)

