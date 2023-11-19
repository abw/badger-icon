import React      from 'react'
import Render     from './_examples/render-icon?raw'
import ImportIcon from './_examples/import-icon?raw'
import CodeBlock from '@/site/CodeBlock.jsx'
import Split from '@/site/Split.jsx'

const BasicUse = () =>
  <div className="flow">
    <h1>Basic Use</h1>

    <h2>Import</h2>
    <Split>
      <p>
        Import the <code>Icon</code> component from <code>@abw/react-icon</code>.
      </p>
      <CodeBlock
        code={ImportIcon}
        language="jsx"
        expand
      />
    </Split>

    <h2>Insert</h2>
    <Split>
      <p>
        Insert the <code>Icon</code> component wherever you want an icon.
        The <code>name</code> should be the name of an icon in the default
        icon set, an icon that you&apos;ve added to the default library, or
        is in a custom library you&apos;ve constructed yourself.
      </p>
      <CodeBlock
        code={Render}
        language="jsx"
        expand
      />
    </Split>
  </div>

export default BasicUse