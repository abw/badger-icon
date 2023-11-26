import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import short          from './_examples/short.js?raw'
import long           from './_examples/long.js?raw'
import Example        from '@/site/Example.jsx'
import MDNElementLink from '@/site/MDNElementLink.jsx'
import CodeBlock      from '@/site/CodeBlock.jsx'
import Split          from '@/site/Split.jsx'

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
    <div className="cols-2">
      <p>
        The short form shown here has <code>polygon</code> as a key
        with the points as the corresponding value.  This is short-hand for
        the longer form shown below where <code>element</code> is set to{' '}
        <code>polygon</code> and the <code>points</code> are listed separately.
        Both formats are valid.
      </p>
    </div>
    <Split>
      <CodeBlock
        code={short}
        caption="Short Form"
        language="js"
        className="mar-b-8"
        expand
      />
      <CodeBlock
        code={long}
        caption="Long Form"
        language="js"
        className="mar-b-8"
        expand
      />
    </Split>
  </div>

export default Polygon