import React      from 'react'
import Icons      from './_examples/Icons.jsx'
import IconsSrc   from './_examples/Icons.jsx?raw'
import Example    from '@/site/Example.jsx'
import Link       from '@/ui/Link.jsx'

const IconIcons = () =>
  <div className="flow">
    <h1>Icon</h1>
    <h2 className="font-mono">library</h2>

    <p className="cols-2">
      The <code>library</code> property can be used to define an alternate
      icon library for the component.
    </p>
    <p>
      See the <Link to="/library" text="Icon Library"/> pages for further
      information about this.
    </p>
    <Example
      Component={Icons}
      code={IconsSrc}
    />

  </div>

export default IconIcons