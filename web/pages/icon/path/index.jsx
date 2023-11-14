import React        from 'react'
import Component    from './_examples/Path.jsx'
import Source       from './_examples/Path.jsx?raw'
import Example      from '@/site/Example.jsx'
import Link from '@/ui/Link.jsx'

const Path = () =>
  <div className="flow">
    <h1>Icon</h1>
    <h2 className="font-mono">path</h2>
    <div className="cols-2">
      <p>
        The <code>path</code> property can be used to define the data
        for an SVG path.
      </p>
      <p>
        In most, if not all cases, you would define
        this in your icon library and refer to it by {' '}
        <Link to="icon/name" text="name"/>.  But this gives you an insight
        into how things work behind the scenes.
      </p>
      <p>
        In simple terms, specifying an icon by
        name causes the component to lookup the path for that icon and
        substitute it in here.  Any modifiers or CSS classes are also
        converted into lower level properties that can be passed directly
        to the component (e.g. <code>className</code>, <code>style</code>{' '}
        and <code>transform</code>).
      </p>
    </div>
    <Example
      Component={Component}
      code={Source}
      undent={4}
      expand
    />

  </div>

export default Path