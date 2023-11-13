import React from 'react'
import Icons from '@/examples/Icons.jsx'

const RotateIcons = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <h2>Rotate</h2>
    <p className="cols-2">
      The <code>rotate=NN</code> modifier will rotate the icon by an
      arbitrary number of degrees.
    </p>
    <Icons names="arrow arrow-rotate=30 arrow-rotate=60"/>
    <Icons names="arrow-rotate=90 arrow-rotate=120 arrow-rotate=150"/>
    <Icons names="arrow-rotate=180 arrow-rotate=210 arrow-rotate=240"/>
    <Icons names="arrow-rotate=270 arrow-rotate=300 arrow-rotate=330"/>
  </div>

export default RotateIcons