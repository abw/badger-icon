import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Example        from '@/site/Example.jsx'
import MDNElementLink from '@/site/MDNElementLink.jsx'

const Polygon = () =>
  <div className="flow">
    <h1>Primitives</h1>
    <h2 className="font-mono">polygon</h2>
    <div className="cols-2">
      <p>
        The <code>polygon</code> element defines a closed shape consisting
        of a set of connected straight line segments. The last point is
        connected to the first point.
      </p>
      <MDNElementLink element="polygon"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </div>

export default Polygon