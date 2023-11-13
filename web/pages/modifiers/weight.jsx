import React from 'react'
import Icons from '@/examples/Icons.jsx'

const Weight = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <h2>Weight</h2>
    <p className="cols-2">
      The <code>thinner</code>, <code>thin</code>, <code>light</code>,{' '}
      <code>medium</code>, <code>heavy</code>, <code>thick</code> and{' '}
      <code>thicker</code> modifiers set the stroke width to pre-defined
      values.
    </p>
    <Icons names="arrow-thinner arrow-thin arrow-light arrow-medium arrow-heavy arrow-thick arrow-thicker"/>
  </div>

export default Weight