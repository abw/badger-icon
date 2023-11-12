import { test, expect } from 'vitest'
import { transformData } from '@/lib/index.js'

test(
  'transformData() should handle empty string',
  () => expect(
    transformData('')
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should handle null',
  () => expect(
    transformData(null)
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should flipX',
  () => expect(
    transformData(
      'flipX'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  true,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should flipx',
  () => expect(
    transformData(
      'flipx'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  true,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should flip-x',
  () => expect(
    transformData(
      'flip-x'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  true,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should flip=x',
  () => expect(
    transformData(
      'flip=x'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  true,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should flip-x',
  () => expect(
    transformData(
      'flip-x'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  true,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should flipY',
  () => expect(
    transformData(
      'flipY'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  true,
    rotate: 0
  })
)

test(
  'transformData() should flipy',
  () => expect(
    transformData(
      'flipy'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  true,
    rotate: 0
  })
)

test(
  'transformData() should flip-y',
  () => expect(
    transformData(
      'flip-y'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  true,
    rotate: 0
  })
)

test(
  'transformData() should flip=y',
  () => expect(
    transformData(
      'flip=y'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  true,
    rotate: 0
  })
)

test(
  'transformData() should flipX only once',
  () => expect(
    transformData(
      'flipX;flipY&flipX'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  true,
    flipY:  true,
    rotate: 0
  })
)

test(
  'transformData() should grow',
  () => expect(
    transformData(
      'grow=3'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   19,
    flipX:  false,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should shrink',
  () => expect(
    transformData(
      'shrink:3'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   13,
    flipX:  false,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should go left',
  () => expect(
    transformData(
      'left:2'
    )
  ).toEqual({
    x:      -2,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should go right',
  () => expect(
    transformData(
      'right:2'
    )
  ).toEqual({
    x:      2,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should go right with negative left',
  () => expect(
    transformData(
      'left:-3'
    )
  ).toEqual({
    x:      3,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should go up',
  () => expect(
    transformData(
      'up:2'
    )
  ).toEqual({
    x:      0,
    y:      -2,
    size:   16,
    flipX:  false,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should go down',
  () => expect(
    transformData(
      'down:2'
    )
  ).toEqual({
    x:      0,
    y:      2,
    size:   16,
    flipX:  false,
    flipY:  false,
    rotate: 0
  })
)

test(
  'transformData() should rotate',
  () => expect(
    transformData(
      'rotate:90'
    )
  ).toEqual({
    x:      0,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  false,
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
    x:      0,
    y:      0,
    size:   16,
    flipX:  false,
    flipY:  false,
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
      rotate: 135
    })
  }
)
