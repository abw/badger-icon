import React    from 'react'
import Icons    from '@/examples/Icons.jsx'
import Library  from '@/lib/Library.js'

const IconsPage = () =>
  <div className="flow">
    <h1>Default Icons</h1>
    <div className="mar-b-8">
      <p>
        This module provides a flexible mechanism for rendering icons but
        it isn&apos;t really intended to be a fully-fledged icon library.
        Some basic icons are included as a starting point.
        In most cases you&apos;ll want to define your own icon library
        including only the icons that you want to use in a project.
      </p>
      <p>
        Note that there&apos;s only one of each basic icon.  There isn&apos;t
        an explicit <code>arrow-right</code> icon defined, for example,
        because specifying <code>arrow-right</code> as an icon name will
        use the <code>arrow</code> icon and apply the <code>right</code>{' '}
        modifier to rotate it to point to the right.
      </p>
    </div>
    <Icons names={Object.keys(Library.icons)}/>
  </div>

export default IconsPage