import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Example        from '@/site/Example.jsx'
import MDNElementLink from '@/site/MDNElementLink.jsx'

const Line = () =>
  <div className="flow">
    <h1>Primitives</h1>
    <h2 className="font-mono">line</h2>
    <div className="cols-2">
      <p>
        The <code>line</code> element can be used to draw straight lines.
      </p>
      <MDNElementLink element="line"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </div>

export default Line