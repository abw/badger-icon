import React      from 'react'
import Icons      from '@/examples/Icons.jsx'
import IconData   from '@/lib/IconData.js'

const IconsPage = () =>
  <div className="flow">
    <h1>Default Icons</h1>
    <div className="cols-2 mar-b-8">
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
    <Icons names={Object.keys(IconData.icons)}/>
  </div>

export default IconsPage