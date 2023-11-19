import React from 'react'
import Icons from '@/examples/Icons.jsx'

const Weight = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <h2>Weight</h2>
    <p className="cols-2">
      The <code>thinnest</code>, <code>thinner</code>, <code>thin</code>,{' '}
      <code>medium</code>, <code>thick</code>, <code>thicker</code> and{' '}
      <code>thickest</code> modifiers set the stroke width to pre-defined
      values.
    </p>
    <Icons names="arrow-thinnest arrow-thinner arrow-thin arrow-medium arrow-thick arrow-thicker arrow-thickest"/>
  </div>

export default Weight