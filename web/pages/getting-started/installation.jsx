import React          from 'react'
import add            from './_examples/add?raw'
import importCSS      from './_examples/badger-icon-css?raw'
import importSCSS     from './_examples/badger-icon-scss?raw'
import { Source }     from '@abw/badger-website'
import Split          from '@/site/Split.jsx'

const Installation = () =>
  <div className="flow">
    <h1>Installation</h1>

    <h2>Adding to a Javascript Project</h2>
    <Split>
      <p>
        Add <code>@abw/badger-icon</code> to your Javascript project
        using your favourite package manager.
      </p>
      <Source
        code={add}
        caption="Installing"
        language="shell"
        className="mar-b-8"
        expand
      />
    </Split>

    <h2>Importing the CSS</h2>
    <Split>
      <div>
        <p>
          The precise details on how you import the CSS will vary depending on
          what framework and bundler you&apos;re using.  For a React app using
          Vite or running under Next.js, for example, you can add the CSS file
          to your main application script as show below.
        </p>
        <p>
          For other frameworks and/or bundlers you should consult the
          documentation on how to import a CSS file from a module in your{' '}
          <code>node_modules</code> directory.
        </p>
      </div>
      <Source
        code={importCSS}
        caption="CSS"
        language="js"
        className="mar-b-8"
        expand
      />
    </Split>

    <h2>Importing the SCSS</h2>
    <Split>
      <div>
        <p>
          If you&apos;re using SASS/SCSS to build your stylesheet then you can
          import the SCSS components.
        </p>
        <p>
          Add the following line to your main SCSS stylesheet source.
        </p>
      </div>
      <Source
        code={importSCSS}
        caption="SCSS"
        language="scss"
        className="mar-b-8"
        expand
      />
    </Split>
  </div>

export default Installation