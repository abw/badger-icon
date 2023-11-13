import React    from 'react'
import Icon     from './_examples/Icon.jsx'
import IconSrc  from './_examples/Icon.jsx?raw'
import Example from '@/site/Example.jsx'

const Index = () =>
  <div className="flow">
    <h1>Icon</h1>
    <div className="cols-2">
      <p>
        The <code>Icon</code> component can be used to render an SVG icon.
      </p>
    </div>
    <Example
      Component={Icon}
      code={IconSrc}
      caption="Icon"
      // undent={4}
      expand
    />
  </div>

export default Index