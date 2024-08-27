import React from 'react'
import Icons from '@/examples/Icons.jsx'
import { Link } from '@abw/badger-website'

const Index = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <div className="cols-2">
      <p>
        Modifiers provide an easy way to alter the basic style of an icon
        or transform it to change the orientation, size or position.
      </p>
      <p>
        Multiple modifiers can be added to an icon{' '}
        <Link to="/icon/name" text="name"/>.  Each should be
        separated by a hyphen.  Modifiers can also be specified using
        the <Link to="/icon/type" text="type"/> property.
      </p>
    </div>
    <Icons
      names="arrow arrow-thin arrow-thick arrow-right arrow-down arrow-left-thick"
    />
    <h2>Parameters</h2>
    <div className="cols-2">
      <p>
        Some modifiers are simple words (e.g. <code>flipy</code>) and others
        can take parameters.  These can be specified using <code>=</code>{' '}
        or <code>:</code> (e.g. <code>rotate=45</code> or{' '}
        <code>rotate:45</code>).  Parameters can include periods (i.e.
        numerical values with a decimal point) and negative values.  As long
        as the minus sign follows immediately after <code>=</code>{' '}
        or <code>:</code> then it is interpreted as part of the value rather
        than a modifier separator.
      </p>
      <p>
        The <code>left</code>, <code>right</code>, <code>up</code> and{' '}
        <code>down</code> modifiers can be used without a parameter to change
        the orientation of the icon, or with a parameter to move it within the
        view box.  Or you can use both in the same icon name to
      </p>
    </div>
    <Icons
      names="arrow-rotate=45 arrow-opacity=0.4 arrow-shrink=6 arrow-shrink=6-down=4 arrow-rotate=-45"
    />
    <Icons
      names="arrow-right.border arrow-right-right=2.border arrow-right-right=4.border"
    />

    <h2>Case Sensitivity</h2>
    <div className="cols-2">
      <p>
        Icon names are case sensitive and by convention are usually lower
        kebab case (e.g. <code>foo-bar</code> rather than <code>foo_bar</code>{' '}
        snake case or <code>fooBar</code> camel case).  But if you&apos;re
        defining your own icon library then you can name then any way you like,
        as long as you reference them using the same case.
      </p>
      <p>
        In contrast, modifier names are NOT case sensitive.  They are all
        defined in lower case but you can reference them in upper or mixed
        case and they will be converted to lower case for matching.  For
        example, <code>-flipy</code>, <code>-flipY</code> and{' '}
        <code>-FlipY</code> are all treated the same as <code>-flipy</code>.
      </p>
    </div>
    <Icons
      names="arrow-flipy arrow-flipY arrow-FlipY"
    />
  </div>

export default Index