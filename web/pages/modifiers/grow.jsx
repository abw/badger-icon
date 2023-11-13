import React from 'react'
import Icons from '@/examples/Icons.jsx'

const GrowIcons = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <h2>Grow</h2>
    <div className="cols-2">
      <p>
        The <code>grow=N</code> modifier can be used to increase the size of the
        icon content.  Each number corresponds to 1/16th of the icon size, e.g{' '}
        <code>grow=8</code> will increase the size by 50%.
      </p>
      <p>
        Note that this scales the icon content inside the view box, but does not
        change the display size of the icon.  However, content may overflow and
        be visible outside the normal bounds of the icon.
      </p>
    </div>
    <Icons names="square square-grow=2 square-grow=4 square-grow=6 square-grow=8 arrow-grow=8.border"/>
  </div>

export default GrowIcons