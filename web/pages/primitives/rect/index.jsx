import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Short          from './_examples/Short.jsx'
import ShortSrc       from './_examples/Short.jsx?raw'
import String         from './_examples/String.jsx'
import StringSrc      from './_examples/String.jsx?raw'
import MDNElementLink from '@/site/MDNElementLink.jsx'
import { Example }    from '@abw/badger-website'

const Rect = () =>
  <div className="flow">
    <h1>Primitives</h1>
    <h2 className="font-mono">rect</h2>
    <div className="cols-2">
      <p>
        The <code>rect</code> element can be used to draw rectangles with
        square or rounded corners.
      </p>
      <p>
        The explicit form is to define the icon as an object with the{' '}
        <code>element</code> property set to <code>rect</code>.  Additional
        properties should be included for <code>x</code>, <code>y</code>,{' '}
        <code>width</code>, <code>height</code> and optionally, {' '}
        <code>rx</code> and <code>ry</code>. Any other properties can be
        included as attributes for the generated SVG <code>rect</code> element.
      </p>

      <MDNElementLink element="rect"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />

    <p className="cols-2">
      The short form of this is an object with a <code>rect</code> property
      which is a string containing the parameters for <code>x</code>,{' '}
      <code>y</code>, <code>width</code>, <code>height</code> and optionally,{' '}
      <code>rx</code> and <code>ry</code>.
    </p>
    <Example
      Component={Short}
      code={ShortSrc}
      expand
      undent={2}
    />

    <p className="cols-2">
      The even shorter form is to define the icon as a string with the{' '}
      <code>rect</code> prefix, a colon, and then the parameters for{' '}
      <code>x</code>, <code>y</code>, <code>width</code>, <code>height</code>,{' '}
      and optionally, <code>rx</code> and <code>ry</code>.
    </p>
    <Example
      Component={String}
      code={StringSrc}
      expand
      undent={2}
    />

  </div>

export default Rect