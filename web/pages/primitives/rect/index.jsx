import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Example        from '@/site/Example.jsx'
import MDNElementLink from '@/site/MDNElementLink.jsx'

const Rect = () =>
  <div className="flow">
    <h1>Primitives</h1>
    <h2 className="font-mono">rect</h2>
    <div className="cols-2">
      <p>
        The <code>rect</code> element can be used to draw rectangles with
        square or rounded corners.
      </p>
      <MDNElementLink element="rect"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </div>

export default Rect