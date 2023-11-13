import React from 'react'
import { Icon } from '@/lib/index.js'

const Component = () =>
  <div className="flex gap-2">
    {/* START */}
    <Icon
      width={32} height={16}
      path="M2,2L16,14L30,2Z"
      className="x3 border"
    />
    {/* END */}
  </div>

export default Component