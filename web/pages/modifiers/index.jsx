import Icons from '@/examples/Icons.jsx'
import Link from '@/ui/Link.jsx'
import React from 'react'

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
        Some modifiers are simple words (e.g. <code>right</code>) and others
        can take parameters.  These can be specified using <code>=</code>{' '}
        or <code>:</code> (e.g. <code>rotate=45</code> or{' '}
        <code>rotate:45</code>).  Parameters can include periods (i.e.
        numerical values with a decimal point) and negative values.  As long
        as the minus sign follows immediately after <code>=</code>{' '}
        or <code>:</code> then it is interpreted as part of the value rather
        than a modifier separator.
      </p>
    </div>
    <Icons
      names="arrow-rotate=45 arrow-opacity=0.4 arrow-shrink=6 arrow-shrink=6-down=4 arrow-rotate=-45"
    />
    <div className="border pad-2 surface-5">
      <div className="smaller">
        Icon name
      </div>
      <div className="larger font-mono mar-b-4">
        arrow-rotate=-45-opacity=0.4<br/>
      </div>
      <div className="smaller">
        Parsed as:
      </div>
      <div className="larger font-mono">
        [&apos;arrow&apos;, &apos;rotate=-45&apos;, &apos;opacity=0.4&apos;]
      </div>
    </div>
  </div>

export default Index