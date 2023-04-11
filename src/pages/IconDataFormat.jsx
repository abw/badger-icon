import React      from 'react'
import CodeBlock from '../site/CodeBlock.jsx'

const IconDataFormat = () =>
  <div>
    <h1>Icon Data Format</h1>
    <p>
      The icon data format is designed to keep the library as small as
      possible.
    </p>
    <p>
      The <code>icons</code> are defined as a Javascript object where the
      keys are the icon names and the corresponding values are the icon
      data for that icon.
    </p>
    <p>
      In the simplest case, an icon can be represented as a single string
      of path data.
    </p>
    <CodeBlock language="json">
      {`icons = {
  "example": "M448,320L256,127L63,320",
}`}
    </CodeBlock>
    <p>
      In this case we assume that the SVG view box for the icon is 512 units
      wide and 512 high.  This is a sensible size for the source SVG for an
      icon. 512 is 16 x 16, so when displayed at the default size of 16px,
      each unit in the source SVG is 1/16th of a display pixel.  Or to put it
      another way, an icon displayed at a font size of 16rem will be 512px
      wide and 512px high and each unit in the SVG source will equate to 1
      display pixel.
    </p>
    <p>
      The reason that this is significant is because it means we can safely
      ignore any fractional parts of coordinates.  Unless an icon is being
      displayed at sizes of 16rem or larger (which is very unusual), integer
      coordinates will be precise to better than one display pixel.  This
      allows us to keep the path data as small as possible.
    </p>
    <p>
      If an icon can&apos;t be represented as a single path, perhaps because
      the width and height of the source aren&apos;t both 512px, or because it
      has additional relevant attributes, then it will be stored as an object.
      The <code>width</code> and <code>height</code> are defined as integers.
      If either is omitted then we assume it is 512.  The path data will be
      defined in <code>path</code>.
    </p>
    <CodeBlock language="json">
      {`icons = {
  "example": {
    "width": 480,
    "height": 520,
    "style": "stroke-width:3px",
    "path": "M448,320L256,127L63,320",
  }
}`}
    </CodeBlock>
    <p>
      If an icon path has additional attributes other than the path data
      then it will be defined as an object containing the attributes and
      corresponding values.  The path data will be in <code>d</code>.  For
      example, a path with a <code>style</code> attribute would be represented
      like this.
    </p>
    <CodeBlock language="json">
      {`icons = {
  "example": {
    "width": 480,
    "height": 520,
    "path": {
      "d": "M448,320L256,127L63,320",
      "style": "fill:#fff"
    }
  }
}`}
    </CodeBlock>
    <p>
      If an icon contains multiple paths then they will be defined in{' '}
      a <code>paths</code> array.  Each element in this array can be a
      path data string or an object containing the path attributes, as
      per the previous examples.
    </p>
    <CodeBlock language="json">
      {`icons = {
  "example": {
    "width": 480,
    "height": 520,
    "paths": [
      "M490,310L220,120L62,310",
      {
        "d": "M448,320L256,127L63,320",
        "style": "fill:#fff"
      }
    ]
  }
}`}
    </CodeBlock>

    <h2>Icon Attributes</h2>
    <h3>path</h3>
    <p>
      The SVG path data as a string or an object.
    </p>
    <h3>paths</h3>
    <p>
      An array of SVG paths, each element being a string or an object.
    </p>
    <h3>width</h3>
    <p>
      The width in pixels of the SVG source.  Defaults to 512.
    </p>
    <h3>height</h3>
    <p>
      The height in pixels of the SVG source.  Defaults to 512.
    </p>
    <h3>class</h3>
    <p>
      A CSS class for the icon.  Multiple classes should be separated by
      spaces, e.g. <code>big red</code>.
    </p>
    <h3>style</h3>
    <p>
      A style attribute for the icon.  This can be a string or an object.
      As a string it should have each style attribute separated from the
      value by a colon and multiple attributes separated by semi-colons.
      Spaces between colons and semi-colons are allowed but optional.
      For example:
    </p>
    <CodeBlock source={`fill:#fff;stroke-width:3px`}/>
    <p>
      As an object that would be:
    </p>
    <CodeBlock source={`{ "fill": "#fff", "stroke-width": "3px" }`}/>
    <h3>transform</h3>
    <p>
      A transformation to be applied to the icon.  This can be a string or
      an object.  As a string it follows the same format as for{' '}
      <code>style</code> with each attribute separated from the value by a
      colon and multiple attributes separated by semi-colons.
      Spaces between colons and semi-colons are also allowed but optional.
      For example:
    </p>
    <CodeBlock source={`right:1;shrink:2;flip`}/>
    <p>
      In object form that would be:
    </p>
    <CodeBlock source={`{ "right": 1, "shrink": 2, "flip": true }`}/>
    <p>
      The valid attributes are based on FontAwesome transformations:{' '}
      <code>left</code>, <code>right</code>, <code>up</code> and{' '}
      <code>down</code> translate the position of the icon within the view
      box, <code>shrink</code> and <code>grow</code> reduce or increase the
      size of the icon respectively, <code>rotate</code> rotates it by a
      number of degrees, <code>flip</code> will flip it horizontally, or
      <code>flop</code> will flip it vertically.
    </p>
    <p>
      The units for code for <code>left</code>, <code>right</code>,{' '}
      <code>up</code>, <code>down</code>, <code>shrink</code> and{' '}
      <code>grow</code> are multiples of 16px in the source image,
      corresponding to 1px when the icon is displayed at a font size of 16px.
      For example, a transform of <code>right:1</code> will shift the icon
      right by 1px when displayed at a font size of 16px, 2px at a font size
      of 32px, and so on.  The units for <code>rotate</code> are degrees.
      The <code>flip</code> and <code>flop</code> transforms do not have any
      units.  When using object form the corresponding values should be set
      to <code>true</code>.
    </p>
    <h2>Icon Path Attributes</h2>
    <p>
      When an icon path is specified as an object it can contain the following
      attributes.
    </p>
    <h3>d</h3>
    <p>
      The SVG path data as a string.
    </p>
    <h3>class</h3>
    <p>
      A CSS class for the path.  Multiple classes should be separated by
      spaces, e.g. <code>big red</code>.
    </p>
    <h3>style</h3>
    <p>
      A style attribute for the path.  This can be a string or an object
      as described above.
    </p>
    <h3>transform</h3>
    <p>
      A transform for the path.  This can be a string or an object
      as described above.
    </p>
  </div>

export default IconDataFormat