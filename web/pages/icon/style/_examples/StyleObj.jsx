import React from 'react'
import { Icon } from '@/lib/index'

const Component = () =>
  <div className="flex gap-2">
    {/* START */}
    <Icon
      size={24}
      path="M2,2L22,22L2,22Z"
      className="x3"
      style={{
        fill: 'orange',
        stroke: 'red',
        strokeWidth: '8%'
      }}
    />
    {/* END */}
  </div>

export default Component