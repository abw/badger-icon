import React      from 'react'
import Component  from './_examples/ClassName.jsx'
import Source     from './_examples/ClassName.jsx?raw'
import Name       from './_examples/Name.jsx'
import NameSrc    from './_examples/Name.jsx?raw'
import Example    from '@/site/Example.jsx'
import Link       from '@/ui/Link.jsx'

const ClassName = () =>
  <div className="flow">
    <h1>Icon</h1>
    <h2 className="font-mono">className</h2>
    <p className="cols-2">
      The <code>className</code> property can be used to add a CSS class to
      the icon.  In this example, we use the <code>x3</code> class which sets
      the font size to 3em. The <code>icon</code> class is added automatically.
    </p>
    <Example
      Component={Component}
      code={Source}
      undent={4}
      expand
    />
    <p className="cols-2">
      As a shortcut CSS classes can also be added to the end of the icon{' '}
      <Link to="/icon/name" text="name"/>, separated by periods.
    </p>
    <Example
      Component={Name}
      code={NameSrc}
      undent={4}
      expand
    />
  </div>

export default ClassName