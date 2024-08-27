import React from 'react'
import { Link } from '@abw/badger-website'


const Index = () =>
  <div className="flow">
    <h1>Icon Library</h1>
    <div className="cols-2">
      <p>
        The default icon library provides some of the most commonly used icons
        as well as a number of icon component that can be composed to make more
        complex icon. At some point you&apos;ll probably want to add some
        different icons to the library, or create your own library from scratch.
        There are a number of ways you can do this.
      </p>
      <p>
        If you just want to add a few icons to the existing library and
        don&apos;t mind getting your hands a little dirty, then you can use
        the <Link to="/library/utilities" text="utility functions"/> to do that.
      </p>
      <p>
        You&apos;ll need to have a least a cursory understanding of the{' '}
        <Link to="/library/data-format" text="data format"/> used for icons.
      </p>
      <p>
        If you want to generate your own custom library then you can use{' '}
        <Link to="/library/badger-icon-tools" text="badger-icon-tools"/> to
        do so.
        You can include any of the 200,000
        open source vector icons available through{' '}
        <a href="https://iconify.design/">Iconify</a> and import icons from your
        own SVG files.
      </p>
      <p>
        If you create your own icon library then you&apos;ll need to know how
        to <Link to="/library/integration" text="integrate it"/> so that the{' '}
        <Link to="/icon" text="Icon component"/> can access the icons you&apos;ve
        defined.
      </p>
    </div>

  </div>

export default Index