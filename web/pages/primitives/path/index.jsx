import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Example        from '@/site/Example.jsx'
import MDNElementLink from '@/site/MDNElementLink.jsx'

const Path = () =>
  <div className="flow">
    <h1>Primitives</h1>
    <h2 className="font-mono">path</h2>
    <div className="cols-2">
      <p>
        The <code>path</code> element is the generic element to define a shape.
      </p>
      <MDNElementLink element="path"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </div>

export default Path