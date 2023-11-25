import React from 'react'
import Icons from '@/examples/Icons.jsx'

const ShrinkIcons = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <h2>Move</h2>
    <div className="cols-2">
      <p>
        The <code>left=N</code>, <code>right=N</code>, <code>up=N</code> and{' '}
        <code>down=N</code> suffixes can be used to move the icon within the
        view box. Each number corresponds to 1/16th of the icon size.
        For example, <code>right=8</code> will move the icon by 50% to the
        right.
      </p>
      <p>
        In these examples we&apos;re adding a border around the icon (using the
        <code>border</code> CSS class) so you can more easily see the effect.
      </p>
    </div>
    <Icons names="arrow-left=8.border arrow-left=4.border arrow.border arrow-right=4.border arrow-right=8.border"/>
    <Icons names="arrow-up=8.border arrow-up=4.border arrow.border arrow-down=4.border arrow-down=8.border"/>
  </div>

export default ShrinkIcons