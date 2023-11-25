import React      from 'react'
import Object     from './_examples/Object.jsx'
import ObjectSrc  from './_examples/Object.jsx?raw'
import Array      from './_examples/Array.jsx'
import ArraySrc   from './_examples/Array.jsx?raw'
import Badger     from './_examples/Badger.jsx'
import BadgerSrc  from './_examples/Badger.jsx?raw'
import String     from './_examples/String.jsx'
import StringSrc  from './_examples/String.jsx?raw'
import Example from '@/site/Example.jsx'

const Primitives = () =>
  <div className="flow">
    <h1>Primitives</h1>
    <p className="cols-2">
      Simple icons are usually defined using a <code>path</code> element,
      but any of the primitive SVG shape elements can be used.
    </p>

    <h2>Body Object</h2>
    <p className="cols-2">
      An icon can define a <code>body</code> string which contains the raw
      SVG markup.  This is typically the best choice for a complex icon
      that doesn&apos;t warrant being broken down into simpler components.
    </p>
    <Example
      Component={String}
      code={StringSrc}
      // expand
    />

    <h2>Body Object</h2>
    <p className="cols-2">
      An icon can define a <code>body</code> object with the{' '}
      <code>element</code> property indicating the primitive type.
      For example, here&apos;s an icon defined using the <code>circle</code>{' '}
      element.
    </p>
    <Example
      Component={Object}
      code={ObjectSrc}
      expand
    />

    <h2>Body Array</h2>
    <p className="cols-2">
      The <code>body</code> can also be an array of multiple objects of
      different elements.
    </p>
    <Example
      Component={Array}
      code={ArraySrc}
      expand
    />
    <p className="cols-2">
      Each element in the <code>body</code> array can define its own{' '}
      <code>style</code>, <code>class</code> or other attributes supported
      by the element.
    </p>
    <Example
      Component={Badger}
      code={BadgerSrc}
      expand
    />
  </div>

export default Primitives
