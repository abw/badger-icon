import React from 'react'
import Icons from '@/examples/Icons.jsx'

const DirectionIcons = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <h2>Direction</h2>
    <p className="cols-2">
      The <code>right</code>, <code>down</code> and <code>left</code> modifiers
      will rotate the icon by 90, 180 and 270 degrees respectively.  The {' '}
      <code>up</code> modifier doesn&apos;t do anything but is included for
      completeness.
    </p>
    <Icons names="arrow arrow-up arrow-down arrow-left arrow-right"/>
  </div>

export default DirectionIcons