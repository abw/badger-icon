import React          from 'react'
import Component      from './_examples/Component.jsx'
import Source         from './_examples/Component.jsx?raw'
import Short          from './_examples/Short.jsx'
import ShortSrc       from './_examples/Short.jsx?raw'
import String         from './_examples/String.jsx'
import StringSrc      from './_examples/String.jsx?raw'
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
      <p>
        The explicit form is to define the icon as an object with the{' '}
        <code>element</code> property set to <code>line</code>.  Additional
        properties should be included for <code>x1</code>, <code>y1</code>,{' '}
        <code>x2</code> and <code>y2</code>. Any other properties can be
        included as attributes for the generated SVG <code>line</code> element.
      </p>
      <MDNElementLink element="line"/>
    </div>
    <Example
      Component={Component}
      code={Source}
      expand
    />

    <p className="cols-2">
      The short form of this is an object with a <code>line</code> property
      which is a string containing the parameters for <code>x1</code>,{' '}
      <code>y1</code>, <code>x2</code> and <code>y2</code>.
    </p>
    <Example
      Component={Short}
      code={ShortSrc}
      expand
      undent={2}
    />

    <p className="cols-2">
      The even shorter form is to define the icon a string with the{' '}
      <code>line</code> prefix, a colon, and then the parameters for{' '}
      <code>x1</code>, <code>y1</code>, <code>x2</code> and <code>y2</code>.
    </p>
    <Example
      Component={String}
      code={StringSrc}
      expand
      undent={2}
    />

  </div>

export default Line