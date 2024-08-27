import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Short          from './_examples/Short.jsx'
import ShortSrc       from './_examples/Short.jsx?raw'
import String         from './_examples/String.jsx'
import StringSrc      from './_examples/String.jsx?raw'
import MDNElementLink from '@/site/MDNElementLink.jsx'
import { Example }    from '@abw/badger-website'

const Path = () =>
  <div className="flow">
    <h1>Primitives</h1>
    <h2 className="font-mono">path</h2>
    <div className="cols-2">
      <p>
        The <code>path</code> element is the generic element to define a shape.
      </p>
      <p>
        The explicit form is to define the icon as an object with the{' '}
        <code>element</code> property set to <code>path</code>.  The{' '}
        <code>d</code> property should define the data points.
        Any other properties can be
        included as attributes for the generated SVG <code>path</code> element.
      </p>
      <MDNElementLink element="path"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />

    <p className="cols-2">
      The short form of this is an object with a <code>path</code> property
      which is a string containing the <code>d</code> path data.
    </p>
    <Example
      Component={Short}
      code={ShortSrc}
      expand
      undent={2}
    />


    <p className="cols-2">
      The even shorter form is to define the icon as a string with the{' '}
      <code>path</code> prefix, a colon, and then the path data.
    </p>
    <Example
      Component={String}
      code={StringSrc}
      expand
      undent={2}
    />

  </div>

export default Path