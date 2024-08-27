import React        from 'react'
import StyleObj     from './_examples/StyleObj.jsx'
import StyleObjSrc  from './_examples/StyleObj.jsx?raw'
import StyleStr     from './_examples/StyleStr.jsx'
import StyleStrSrc  from './_examples/StyleStr.jsx?raw'
import { Example }  from '@abw/badger-website'

const StyleExamples = () =>
  <div className="flow">
    <h1>Icon</h1>
    <h2 className="font-mono">style</h2>
    <p className="cols-2">
      The <code>style</code> property can be used to apply custom styling
      to the icon.
    </p>

    <h2>Style String</h2>
    <p className="cols-2">
      The <code>style</code> can be an SVG property string. Properties can be
      written in <code>camelCase</code> or <code>kebab-case</code>.
    </p>
    <Example
      Component={StyleStr}
      code={StyleStrSrc}
      undent={4}
      expand
    />

    <h2>Style Object</h2>
    <p className="cols-2">
      The <code>style</code> can also be an object.  Properties can be
      written in <code>camelCase</code> or <code>kebab-case</code>.
    </p>
    <Example
      Component={StyleObj}
      code={StyleObjSrc}
      undent={4}
      expand
    />
  </div>

export default StyleExamples