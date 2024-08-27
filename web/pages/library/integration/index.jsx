import React        from 'react'
import IconIcons    from './_examples/IconIcons.jsx'
import IconIconsSrc from './_examples/IconIcons.jsx?raw'
import Custom       from './_examples/CustomIcon.jsx'
import CustomSrc    from './_examples/CustomIcon.jsx?raw'
import Theme        from './_examples/Theme.jsx'
import ThemeSrc     from './_examples/Theme.jsx?raw'
import { Example, Link } from '@abw/badger-website'


const Integration = () =>
  <div className="flow">
    <h1>Icon Library</h1>
    <h2>Integration</h2>

    <div className="cols-2">
      <p>
        If you&apos;ve create a custom icon library then you need to know
        how to integrate it so that the{' '}
        <Link to="/icon" text="Icon"/> component can access the icons.
      </p>
    </div>

    <h2>The <span className="font-mono">library</span> Property</h2>
    <div className="cols-2">
      <p>
        The quick and simple approach is to pass your icon library data to
        the component via the <code>library</code> property.
      </p>
    </div>
    <Example
      Component={IconIcons}
      code={IconIconsSrc}
      expand
    />

    <h2>A Custom Component</h2>
    <div className="cols-2">
      <p>
        It can get a bit tedious having to add the <code>library</code> property
        every time you use the <code>Icon</code> component.  Another approach
        is to define your own icon component that is a wrapper around it and
        injects the <code>library</code> property for you.
      </p>
      <p>
        You can call it anything you like.  In this example, we create a
        new <code>Icon</code> component which is a wrapper around the original{' '}
        <code>Icon</code>, imported as <code>BadgerIcon</code>.  Just remember
        to import <i>your</i> <code>Icon</code> component when you use it
        instead of the default one from <code>@abw/badger-icon</code>.
      </p>
    </div>
    <Example
      Component={Custom}
      code={CustomSrc}
      expand
    />

    <h2>Theme Provider</h2>
    <div className="cols-2">
      <p>
        Another approach is to use the theme provider to automatically
        inject the <code>library</code> property into the <code>Icon</code>{' '}
        component.  This uses{' '}
        <a href="https://abw.github.io/react-one-louder/">react-one-louder</a> as
        the theming engine.
      </p>
      <p>
        Import the <code>Theme</code> component and then enclose your app
        (or part of it) in a <code>Theme.Provider</code> element.  This would
        usually be done somewhere near the &quot;top&quot; of your application.
        For example, if you&apos;re using <a href="https://vitejs.dev/">Vite</a>{' '}
        then the <code>main.jsx</code> (or <code>main.tsx</code>) would be the
        usual place.  For a <a href="">Next.js</a> app, you could add it to the{' '}
        <a href="https://nextjs.org/docs/pages/building-your-application/routing/custom-app">_app.js</a>.
      </p>
      <p>
        The properties added to the <code>Theme.Provider</code> should include
        an <code>Icon</code> object including any properties that you want
        to automatically inject into the <code>Icon</code> component.  In this
        case, we want to set the <code>library</code> to reference our custom
        library.
      </p>
      <p>
        That&apos;s all you need to do.  Now you can use the standard{' '}
        <code>Icon</code> component anywhere in your app and it will
        automatically receive the <code>library</code> property for your custom
        icon library.
      </p>
      <p>
        You can also use the theme provider to inject properties into any
        other components in your application.  You just need to make a one-line
        change to the exported value for the component to wrap it with
        the <code>Themed</code> higher order component.  See the{' '}
        <a href="https://abw.github.io/react-one-louder/">react-one-louder</a> documentation
        for further details.
      </p>
    </div>
    <Example
      Component={Theme}
      code={ThemeSrc}
      expand
    />

  </div>

export default Integration