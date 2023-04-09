import React      from 'react'
import CodeBlock  from '../site/CodeBlock.jsx'

const GettingStarted = () =>
  <div>
    <h1>Getting Started</h1>
    <p>
      Add the <code className="code">@abw/react-icon</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock language="bash">
      {`## using npm
$ npm add @abw/react-icon

## using yarn
$ yarn add @abw/react-icon

## using pnpm
$ pnpm add @abw/react-icon
`}
    </CodeBlock>
    <p>
      You can then import the modules and start using them.
    </p>
    <CodeBlock>
      {`import { Hello } from '@abw/react-icon'`}
    </CodeBlock>

  </div>

export default GettingStarted