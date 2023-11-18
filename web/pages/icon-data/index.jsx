import React        from 'react'
import Minimal      from './_examples/minimal.json?raw'
import WidthHeight  from './_examples/width-height.json?raw'
import Type         from './_examples/type.json?raw'
import TypePrefix   from './_examples/type-prefix.json?raw'
import MultiType    from './_examples/multi-type.json?raw'
import Style        from './_examples/style.json?raw'
import CodeBlock    from '@/site/CodeBlock.jsx'
import Link         from '@/ui/Link.jsx'


const Index = () =>
  <div className="flow">
    <h1>Icon Data Format</h1>
    <div className="cols-2">
      <p>
        TODO: You can create your own icon library...
      </p>
      <p>
        The icon data format is designed to keep the library as small as
        possible, wherever possible.
      </p>
      <p>
        The <code>icons</code> are defined as a Javascript object where the
        keys are the icon names and the corresponding values are the icon
        data for that icon.
      </p>
    </div>
    <h2>Minimal Example</h2>
    <p className="cols-2">
      For simple icons that are composed from a single filled path
      you can define an icon to be a string containing the path data.
    </p>
    <CodeBlock
      code={Minimal}
      // caption="Installing"
      language="json"
      className="mar-b-8"
      expand
    />

    <h2>Width and Height</h2>
    <div className="cols-2">
      <p>
        The default size for the SVG view box for the icon is 512 units
        wide and 512 high.
      </p>
      <p>
        512 is 16 x 16, so when displayed at the default size of 16px,
        each unit in the source SVG coordinate system is 1/16th of a display
        pixel.  Or to put it another way, an icon displayed at a font size of
        16rem will be 512px wide and 512px high and each unit in the SVG
        source will equate to 1 display pixel.
      </p>
      <p>
        One benefit of this is that we can round coordinates to the nearest
        integer without any noticeable loss of precision.  An icon displayed
        at a size of 16rem (512px x 512px) will be pixel perfect. An icon
        displayed at 32rem (1024px x 1024px) will have coordinates that are
        no more than 1 pixel out.
      </p>
      <p>
        Of course, you don&apos;t have to round
        your coordinates to the nearest integer, but doing can significantly
        reduce the size of the path data.  For example, a coordinate of{' '}
        <code>123</code> is 3 bytes, compared to <code>12.34</code> which is 5,
        and they have a similar precision.
      </p>
      <p>
        If your icon uses a different width and height then the icon can
        be defined as an object specifying the <code>width</code> and{' '}
        <code>height</code>.  If either is omitted then we assume it is 512.
        The path data can be set using the <code>path</code> property.
      </p>
    </div>
    <CodeBlock
      code={WidthHeight}
      language="json"
      className="mar-b-8"
      expand
    />

    <h2>Type</h2>
    <div className="cols-2">
      <p>
        The <code>type</code> property can be set to define the basic icon
        type.  This defaults to <code>fill</code> which sets the{' '}
        <code>fill</code> color to <code>currentColor</code>.
      </p>
      <p>
        You can also set it to <code>line</code> for stroked icons.  This will
        set the <code>fill</code> to <code>none</code> and the <code>stroke</code>{' '}
        to <code>currentColor</code>.
      </p>
    </div>
    <CodeBlock
      code={Type}
      language="json"
      className="mar-b-8"
      expand
    />
    <p className="cols-2">
      As a shortcut you can prefix the path data with the type, separated
      by a colon.
    </p>
    <CodeBlock
      code={TypePrefix}
      language="json"
      className="mar-b-8"
      expand
    />

    <h2>Modifiers</h2>
    <div className="cols-2">
      <p>
        The <code>type</code> property can include any number of modifiers
        to set the style and/or transforms.  It is equivalent to setting
        the <Link to="/icon/type" text="type"/> property when rendering an
        icon.
      </p>
      <p>
        You can also define multiple modifiers in the prefix to a simple
        path.
      </p>
    </div>
    <CodeBlock
      code={MultiType}
      language="json"
      className="mar-b-8"
      expand
    />

    <h2>Style</h2>
    <div className="cols-2">
      <p>
        The <code>style</code> property can be used to define styling for
        the icon.  It is equivalent to setting
        the <Link to="/icon/style" text="style"/> property when rendering an
        icon.
      </p>
      <p>
        It can be provided as a string or object.
      </p>
    </div>
    <CodeBlock
      code={Style}
      language="json"
      className="mar-b-8"
      expand
    />
  </div>

export default Index