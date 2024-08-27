import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Short          from './_examples/Short.jsx'
import ShortSrc       from './_examples/Short.jsx?raw'
import String         from './_examples/String.jsx'
import StringSrc      from './_examples/String.jsx?raw'
import MDNElementLink from '@/site/MDNElementLink.jsx'
import { Example }    from '@abw/badger-website'

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
      <p>
        The explicit form is to define the icon as an object with the{' '}
        <code>element</code> property set to <code>polygon</code> and an
        additional property for the <code>points</code>. Any other properties
        can be included as attributes for the generated SVG{' '}
        <code>polygone</code> element.
      </p>

      <MDNElementLink element="polygon"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />

    <p className="cols-2">
      The short form of this is an object with a <code>polygon</code> property
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
      <code>polygon</code> prefix, a colon, and then the <code>points</code>.
    </p>
    <Example
      Component={String}
      code={StringSrc}
      expand
      undent={2}
    />
  </div>

export default Polygon