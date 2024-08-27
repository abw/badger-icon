import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Short          from './_examples/Short.jsx'
import ShortSrc       from './_examples/Short.jsx?raw'
import String         from './_examples/String.jsx'
import StringSrc      from './_examples/String.jsx?raw'
import MDNElementLink from '@/site/MDNElementLink.jsx'
import { Example }    from '@abw/badger-website'

const Ellipse = () =>
  <div className="flow">
    <h1>Primitives</h1>
    <h2 className="font-mono">ellipse</h2>
    <div className="cols-2">
      <p>
        The <code>ellipse</code> element can be used to draw ellipses.
      </p>
      <p>
        The explicit form is to define the icon as an object with the{' '}
        <code>element</code> property set to <code>ellipse</code>.  Additional
        properties should be included for <code>cx</code>, <code>cy</code>,{' '}
        <code>rx</code> and <code>ry</code>. Any other properties can be
        included as attributes for the generated SVG <code>ellipse</code> element.
      </p>
      <MDNElementLink element="ellipse"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />

    <p className="cols-2">
      The short form of this is an object with an <code>ellipse</code> property
      which is a string containing the parameters for <code>cx</code>,{' '}
      <code>cy</code>, <code>rx</code> and <code>ry</code>.
    </p>
    <Example
      Component={Short}
      code={ShortSrc}
      expand
      undent={2}
    />


    <p className="cols-2">
      The even shorter form is to define the icon as a string with the <code>ellipse</code> prefix,
      a colon, and then the parameters for <code>cx</code>, <code>cy</code>,{' '}
      <code>rx</code> and <code>ry</code>.
    </p>
    <Example
      Component={String}
      code={StringSrc}
      expand
      undent={2}
    />
  </div>

export default Ellipse