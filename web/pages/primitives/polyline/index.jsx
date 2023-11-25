import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Example        from '@/site/Example.jsx'
import MDNElementLink from '@/site/MDNElementLink.jsx'
import Link from '@/ui/Link.jsx'

const Polyline = () =>
  <div className="flow">
    <h1>Primitives</h1>
    <h2 className="font-mono">polyline</h2>
    <div className="cols-2">
      <p>
        The <code>polyline</code> element is used to creates straight lines
        connecting several points. Typically a polyline is used to create
        open shapes as the last point doesn&apos;t have to be connected to the
        first point. For closed shapes see
        the <Link to="/primitives/polygon" text="polygon"/> element.
      </p>
      <MDNElementLink element="polyline"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </div>

export default Polyline