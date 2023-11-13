import React from 'react'
import Icons from '@/examples/Icons.jsx'

const FlipIcons = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <h2>Flip</h2>
    <p className="cols-2">
      The <code>flipx</code> (or just <code>flip</code>) modifier will
      flip the icon around the X axis.  The <code>flipy</code>{' '}
      (or <code>flop</code>) modifier will flip it around the Y axis.
    </p>
    <Icons names="rotate rotate-flipx rotate-flip"/>
    <Icons names="rotate rotate-flipy rotate-flop"/>
    <Icons names="rotate rotate-flipx-flipy rotate-flip-flop"/>
  </div>

export default FlipIcons