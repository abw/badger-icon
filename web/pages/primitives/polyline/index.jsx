import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Short          from './_examples/Short.jsx'
import ShortSrc       from './_examples/Short.jsx?raw'
import String         from './_examples/String.jsx'
import StringSrc      from './_examples/String.jsx?raw'
import MDNElementLink from '@/site/MDNElementLink.jsx'
import { Example, Link } from '@abw/badger-website'

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
      <p>
        The explicit form is to define the icon as an object with the{' '}
        <code>element</code> property set to <code>polyline</code> and an
        additional property for the <code>points</code>. Any other properties
        can be included as attributes for the generated SVG{' '}
        <code>polyline</code> element.
      </p>
      <MDNElementLink element="polyline"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />

    <p className="cols-2">
      The short form of this is an object with a <code>polyline</code> property
      which is a string containing the <code>points</code>.
    </p>
    <Example
      Component={Short}
      code={ShortSrc}
      expand
      undent={2}
    />


    <p className="cols-2">
      The even shorter form is to define the icon as a string with the{' '}
      <code>polyline</code> prefix, a colon, and then the <code>points</code>.
    </p>
    <Example
      Component={String}
      code={StringSrc}
      expand
      undent={2}
    />
  </div>

export default Polyline