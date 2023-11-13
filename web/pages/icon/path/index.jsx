import React        from 'react'
import Component    from './_examples/Path.jsx'
import Source       from './_examples/Path.jsx?raw'
import Example      from '@/site/Example.jsx'

const Path = () =>
  <div className="flow">
    <h1>Icon</h1>
    <h2 className="font-mono">path</h2>
    <p className="cols-2">
      The <code>path</code> property can be used to define the data
      for an SVG path.
    </p>
    <Example
      Component={Component}
      code={Source}
      undent={4}
      expand
    />

  </div>

export default Path