import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import short          from './_examples/short.js?raw'
import long           from './_examples/long.js?raw'
import Example        from '@/site/Example.jsx'
import MDNElementLink from '@/site/MDNElementLink.jsx'
import Link           from '@/ui/Link.jsx'
import CodeBlock      from '@/site/CodeBlock.jsx'
import Split          from '@/site/Split.jsx'

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
    <div className="cols-2">
      <p>
        The short form shown here has <code>polyline</code> as a key
        with the points as the corresponding value.  This is short-hand for
        the longer form shown below where <code>element</code> is set to{' '}
        <code>polyline</code> and the <code>points</code> are listed separately.
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

export default Polyline