import React      from 'react'
import Name       from './_examples/Name.jsx'
import NameSrc    from './_examples/Name.jsx?raw'
import Mods       from './_examples/Mods.jsx'
import ModsSrc    from './_examples/Mods.jsx?raw'
import Classes    from './_examples/Classes.jsx'
import ClassesSrc from './_examples/Classes.jsx?raw'
import Icons      from '@/examples/Icons.jsx'
import IconData   from '@/lib/IconData.js'
import Example    from '@/site/Example.jsx'
import Link from '@/web/ui/Link.jsx'

const IconName = () =>
  <div className="flow">
    <h1>Icon</h1>
    <h2 className="font-mono">name</h2>
    <p className="cols-2">
      The <code>name</code> property can be used to select an icon from the
      default icon library.
    </p>
    <Example
      Component={Name}
      code={NameSrc}
      undent={4}
      expand
    />

    <h2>Modifiers</h2>
    <div className="cols-2">
      <p>
        You can add <Link to="/modifiers">modifiers</Link> to the end of
        an icon name to change the style, size, orientation or position of
        an icon.  Each should be separated by a hyphen.
      </p>
      <p>
        For example, the <code>right</code> modifier rotates an icon through
        90&deg; so that it&apos;s pointing to the right, the{' '}
        <code>thicker</code> modifier sets a thicker stroke width, and so on.
      </p>
    </div>
    <Example
      Component={Mods}
      code={ModsSrc}
      undent={4}
      expand
    />

    <h2>CSS Classes</h2>
    <div className="cols-2">
      <p>
        You can add CSS classes to the end of an icon name to have them
        added to the icon.  Each should be separated by a period.
        Classes should be added after any modifiers.
      </p>
      <p>
        Classes can contain hyphens (e.g. <code>shadow-2</code>) and modifier
        parameters can contain periods (e.g. <code>opacity=0.5</code>).
        The first period in an icon name is <i>usually</i> treated as the
        start of a list of classes <i>unless</i> it appears immediately
        before a number.  Thus, the period in <code>0.5</code> is treated
        as part of the number and does not indicate the start of the classes
        section.  Hyphens are used to separate modifiers <i>before</i> the
        first period marking the start of the classes section.  After that,
        periods are used to separate classes and hyphens can be safely
        included in class names.
      </p>
    </div>
    <Example
      Component={Classes}
      code={ClassesSrc}
      undent={4}
      expand
    />

    <h2>Default Icons</h2>
    <div className="cols-2">
      <p>
        In most cases you&apos;ll want to define your own icon library
        including only the icons that you want to use in a project.
        However, some basic icons are included as a starting point.
      </p>
      <p>
        Note that there&apos;s only one of each basic icon.  There isn&apos;t
        an explicit <code>arrow-right</code> icon defined, for example,
        because specifying <code>arrow-right</code> as an icon name will
        use the <code>arrow</code> icon and apply the <code>right</code>{' '}
        modifier to rotate it to point to the right.
      </p>
    </div>
    <Icons names={Object.keys(IconData)}/>
  </div>

export default IconName