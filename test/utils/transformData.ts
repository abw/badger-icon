import { test, expect } from 'vitest'
import { nullTransform, transformData } from '@/lib/index'

test(
  'transformData() should handle empty string',
  () => expect(
    transformData('')
  ).toEqual(
    nullTransform
  )
)

test(
  'transformData() should handle null',
  () => expect(
    transformData(null)
  ).toEqual(
    nullTransform
  )
)

test(
  'transformData() should flipX',
  () => expect(
    transformData(
      'flipX'
    )
  ).toEqual({
    ...nullTransform,
    flipX: true,
  })
)

test(
  'transformData() should flipx',
  () => expect(
    transformData(
      'flipx'
    )
  ).toEqual({
    ...nullTransform,
    flipX: true,
  })
)

test(
  'transformData() should flip-x',
  () => expect(
    transformData(
      'flip-x'
    )
  ).toEqual({
    ...nullTransform,
    flipX: true,
  })
)

test(
  'transformData() should flip=x',
  () => expect(
    transformData(
      'flip=x'
    )
  ).toEqual({
    ...nullTransform,
    flipX: true,
  })
)

test(
  'transformData() should flip-x',
  () => expect(
    transformData(
      'flip-x'
    )
  ).toEqual({
    ...nullTransform,
    flipX: true,
  })
)

test(
  'transformData() should flipY',
  () => expect(
    transformData(
      'flipY'
    )
  ).toEqual({
    ...nullTransform,
    flipY: true,
  })
)

test(
  'transformData() should flipy',
  () => expect(
    transformData(
      'flipy'
    )
  ).toEqual({
    ...nullTransform,
    flipY: true,
  })
)

test(
  'transformData() should flip-y',
  () => expect(
    transformData(
      'flip-y'
    )
  ).toEqual({
    ...nullTransform,
    flipY: true,
  })
)

test(
  'transformData() should flip=y',
  () => expect(
    transformData(
      'flip=y'
    )
  ).toEqual({
    ...nullTransform,
    flipY: true,
  })
)

test(
  'transformData() should flipX only once',
  () => expect(
    transformData(
      'flipX;flipY&flipX'
    )
  ).toEqual({
    ...nullTransform,
    flipX: true,
    flipY: true,
  })
)

test(
  'transformData() should grow',
  () => expect(
    transformData(
      'grow=3'
    )
  ).toEqual({
    ...nullTransform,
    size: 19,
  })
)

test(
  'transformData() should shrink',
  () => expect(
    transformData(
      'shrink:3'
    )
  ).toEqual({
    ...nullTransform,
    size: 13,
  })
)

test(
  'transformData() should go left',
  () => expect(
    transformData(
      'left:2'
    )
  ).toEqual({
    ...nullTransform,
    x: -2,
  })
)

test(
  'transformData() should go right',
  () => expect(
    transformData(
      'right:2'
    )
  ).toEqual({
    ...nullTransform,
    x: 2,
  })
)

test(
  'transformData() should go right with negative left',
  () => expect(
    transformData(
      'left:-3'
    )
  ).toEqual({
    ...nullTransform,
    x: 3,
  })
)

test(
  'transformData() should go up',
  () => expect(
    transformData(
      'up:2'
    )
  ).toEqual({
    ...nullTransform,
    y: -2,
  })
)

test(
  'transformData() should go down',
  () => expect(
    transformData(
      'down:2'
    )
  ).toEqual({
    ...nullTransform,
    y: 2,
  })
)

test(
  'transformData() should rotate',
  () => expect(
    transformData(
      'rotate:90'
    )
  ).toEqual({
    ...nullTransform,
    rotate: 90
  })
)

test(
  'transformData() should not rotate multiple times in a single pass (last wins)',
  () => expect(
    transformData(
      'rotate:90 rotate:45 & rotate=55'
    )
  ).toEqual({
    ...nullTransform,
    rotate: 55
  })
)

test(
  'transformData() should do it all',
  () => expect(
    transformData(
      'left:10;right:2;up:1;down:12;flipX;flipY;shrink=2;grow=5;rotate=90'
    )
  ).toEqual({
    x:      -8,
    y:      11,
    size:   19,
    flipX:  true,
    flipY:  true,
    scaleX: 1,
    scaleY: 1,
    rotate: 90
  })
)

test(
  'transformData() should accept a target',
  () => {
    let one = transformData(
      'left:10;up:1;flipX;shrink=2;rotate=90'
    )
    expect(one).toEqual({
      x:      -10,
      y:      -1,
      size:   14,
      flipX:  true,
      flipY:  false,
      scaleX: 1,
      scaleY: 1,
      rotate: 90
    })

    transformData(
      'right:2;down:12;flipY;grow=5;rotate=45',
      one
    )

    expect(one).toEqual({
      x:      -8,
      y:      11,
      size:   19,
      flipX:  true,
      flipY:  true,
      scaleX: 1,
      scaleY: 1,
      rotate: 135
    })
  }
)

test(
  'transformData() should accumulate flip and rotate',
  () => {
    let one = transformData(
      'flipX;rotate=90'
    )
    expect(one).toEqual({
      x:      0,
      y:      0,
      size:   16,
      flipX:  true,
      flipY:  false,
      scaleX: 1,
      scaleY: 1,
      rotate: 90
    })

    transformData(
      'flip-x;flip=y;rotate=45',
      one
    )

    expect(one).toEqual({
      x:      0,
      y:      0,
      size:   16,
      flipX:  false,
      flipY:  true,
      scaleX: 1,
      scaleY: 1,
      rotate: 135
    })
  }
)
