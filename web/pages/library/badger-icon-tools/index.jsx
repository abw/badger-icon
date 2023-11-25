import React        from 'react'
// import CodeBlock    from '@/site/CodeBlock.jsx'
import Link         from '@/ui/Link.jsx'

const BadgerIconTools = () =>
  <div className="flow">
    <h1>Icon Library</h1>
    <h2>Badger Icon Tools</h2>
    <div className="cols-2">
      <p>
        The <code>@abw/badger-icon-tools</code> library provides a simple way
        to build your own icon library.  You can include any of the 200,000
        open source vector icons available through{' '}
        <a href="https://iconify.design/">Iconify</a>, import icons from your
        own SVG file, or hand craft icon components if that&apos;s your thing.
      </p>
      <p>
        There&apos;s a separate website dedicated to using{' '}
        <code>@abw/badger-icon-tools</code> (or soon will be - it&apos;s still
        a work in progress as I write this).
      </p>
      <p>
        The end result is that
        you&apos;ll end up with your own icon library in a Javascript file
        that you&apos;ll need to patch into the <Link to="/icon" text="Icon"/>{' '}
        component.
      </p>
    </div>
  </div>

export default BadgerIconTools