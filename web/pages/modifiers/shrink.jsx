import React from 'react'
import Icons from '@/examples/Icons.jsx'

const ShrinkIcons = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <h2>Shrink</h2>
    <p className="cols-2">
      The <code>shrink=N</code> suffix can be used to decrease the size of the
      icon content.  Each number corresponds to 1/16th of the icon size, e.g{' '}
      <code>shrink=8</code> will reduce the size by 50%.
    </p>
    <Icons names="square square-shrink=2 square-shrink=4 square-shrink=6 square-shrink=8"/>
  </div>

export default ShrinkIcons