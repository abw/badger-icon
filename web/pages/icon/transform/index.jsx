import React        from 'react'
import TransObj     from './_examples/TransObj.jsx'
import TransObjSrc  from './_examples/TransObj.jsx?raw'
import TransStr     from './_examples/TransStr.jsx'
import TransStrSrc  from './_examples/TransStr.jsx?raw'
import Example      from '@/site/Example.jsx'

const TransExamples = () =>
  <div className="flow">
    <h1>Icon</h1>
    <h2 className="font-mono">transform</h2>
    <p className="cols-2">
      The <code>transform</code> property can be used to apply a custom
      transform to the icon.  These are based on the{' '}
      <a href="https://fontawesome.com/docs/web/style/power-transform">Font Awesome transforms</a>.
    </p>
    <h2>Transform String</h2>
    <p className="cols-2">
      The <code>transform</code> can be an SVG property string.
    </p>
    <Example
      Component={TransStr}
      code={TransStrSrc}
      undent={4}
      expand
    />
    <h2>Transform Object</h2>
    <p className="cols-2">
      The <code>transform</code> can also be an object.
    </p>
    <Example
      Component={TransObj}
      code={TransObjSrc}
      undent={4}
      expand
    />
  </div>

export default TransExamples