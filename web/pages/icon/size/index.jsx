import React        from 'react'
import Component    from './_examples/Size.jsx'
import Source       from './_examples/Size.jsx?raw'
import WHComponent  from './_examples/WidthHeight.jsx'
import WHSource     from './_examples/WidthHeight.jsx?raw'
import Example      from '@/site/Example.jsx'

const Size = () =>
  <div className="flow">
    <h1>Icon</h1>
    <h2 className="font-mono">size</h2>
    <div className="cols-2">
      <p>
        The default view box for an SVG icon is 512px wide and 512px high.
        The <code>size</code> property can be used to set both the width and
        height to a different value. Note that this only affect the resolution
        of the internal coordinates used in paths and does not change the
        dimensions of the displayed icon.
      </p>
      <p>
        The default font size for an icon is 1em.  In this example
        the <code>x3</code> CSS class is added to set the size to{' '}
        3em, along with the <code>border</code> class to add a{' '}
        1px border.  So the total icon height is 50px
        (assuming 1em = 16px, so 3em x 16px = 48px + 2px border).
      </p>
    </div>
    <Example
      Component={Component}
      code={Source}
      undent={4}
      expand
    />

    <h2>
      <span className="font-mono">width</span> and <span className="font-mono">height</span>
    </h2>
    <div className="cols-2">
      <p>
        The <code>width</code> and <code>height</code> properties can also be
        used to set the view box width and height if you want to use different
        values.  Note that the <code>height</code> of the displayed icon will
        always be the same, regardless of the internal view box coordinates.
      </p>
      <p>
        As in the previous example, the <code>x3</code> CSS class is used to
        set the icon font size to <code>3em</code>.  However, setting a
        different value for <code>width</code> <i>will</i> change the
        displayed width.  In this example the width is twice that of the
        height (32 vs 16), so the displayed icon width will be{' '}
        <code>6em</code> wide (96px) plus 2px for the border, for a total of
        98px.
      </p>
    </div>
    <Example
      Component={WHComponent}
      code={WHSource}
      undent={4}
      expand
    />

  </div>

export default Size