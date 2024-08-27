import React        from 'react'
import AddIcon      from './_examples/AddIcon.jsx'
import AddIconSrc   from './_examples/AddIcon.jsx?raw'
import AddIcons     from './_examples/AddIcons.jsx'
import AddIconsSrc  from './_examples/AddIcons.jsx?raw'
import { Example, Link }    from '@abw/badger-website'

const Utilities = () =>
  <div className="flow">
    <h1>Icon Library</h1>
    <h2>Utilities</h2>

    <div className="cols-2">
      <p>
        Adding icons to the default library is easy.  In these examples
        we&apos;ll keep it simple and assume that you&apos;ve got an icon
        that is defined by a single <code>path</code> element.  We&apos;ll
        also assume that it&apos;s a stroked path rather than a filled path.
      </p>
      <p>
        If you&apos;re not sure what that means, or if you&apos;ve got a more
        complex icon that you want to include then the{' '}
        <Link to="/library/data-format" text="data format"/> page describes
        the various different ways you can specify icon data.
      </p>
    </div>

    <h2 className="font-mono">addIcon()</h2>
    <div className="cols-2">
      <p>
        The <code>addIcon()</code> function can be used to add a single
        icon to the default library.  The first argument is the icon name,
        the second is the icon definition.  For simple icon paths like the
        one we&apos;re using in this example, you can specify just the path
        data (the <code>d</code> attribute from the <code>path</code> element).
      </p>
      <p>
        You can then use the icon by specifying the name, either by itself
        or with any additional modifiers or CSS classes.
      </p>
    </div>
    <Example
      Component={AddIcon}
      code={AddIconSrc}
      expand
    />

    <h2 className="font-mono">addIcons()</h2>
    <div className="cols-2">
      <p>
        The <code>addIcons()</code> function can be used to add multiple
        icons to the default library.  The only argument is an object in which
        the keys are the icon names and the corresponding values are the icon
        definitions.
      </p>
    </div>
    <Example
      Component={AddIcons}
      code={AddIconsSrc}
      expand
    />
  </div>

export default Utilities