import React from 'react'
import { Icon } from '@/lib/index.js'

const Component = () =>
  <div className="flex gap-2">
    {/* START */}
    <Icon
      size={24}
      path="M2,2L22,22L2,22Z"
      className="x3 border"
      transform="flipX; rotate:25; shrink:4; right:2"
    />
    {/* END */}
  </div>

export default Component