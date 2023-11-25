import React      from 'react'
import Icons      from './_examples/Icons.jsx'
import IconsSrc   from './_examples/Icons.jsx?raw'
import Example    from '@/site/Example.jsx'

const IconIcons = () =>
  <div className="flow">
    <h1>Icon</h1>
    <h2 className="font-mono">icons</h2>

    <p className="cols-2">
      The <code>icons</code> property can be used to define an alternate
      icon library for the component.
    </p>
    <Example
      Component={Icons}
      code={IconsSrc}
      // undent={2}
      // expand
    />

  </div>

export default IconIcons