import React      from 'react'
import CodeBlock  from '@/site/CodeBlock.jsx'
import Img        from './_examples/img.html?raw'
import Inline     from './_examples/inline.html?raw'

const Home = () =>
  <div className="container-mobile flow">
    <h1>React Icon</h1>
    <h2>SVG Icons are Great!</h2>
    <p className="mar-b-none">
      You can reference them as the <code>src</code>{' '}
      in an <code>img</code> tag.
    </p>
    <CodeBlock
      code={Img}
      language="html"
      className=""
      expand
    />
    <p className="mar-b-none">
      You can also embed them directly into an html page in an <code>svg</code>{' '}
      tag.
    </p>
    <CodeBlock
      code={Inline}
      language="html"
      className=""
      expand
    />
    <p>
      The only slight downside to the first approach is that it creates an
      extra http request for each icon.  If you&apos;ve got a lot on a page
      then it can slow down the loading of the page.
    </p>
    <p>
      The second approach avoids the extra request but the tradeoff is an
      increase in the page size, which also means the page will take longer
      to load.
    </p>
    {/*
    <p>
      This is a work in progress for rendering SVG icons in React.
    </p>
    <p>
      What makes this unique is that a single icon can be defined in a library,
      e.g. <code>angle</code>, and then rendered in many different styles,
      e.g. <code>angle-right</code>, <code>angle-light</code>, <code>angle-heavy</code>,
      and so on.
    </p>

    <h2>Stroke Weight</h2>
    <p>
      The <code>-thinner</code>, <code>-thin</code>, <code>-light</code>,{' '}
      <code>-medium</code>, <code>-heavy</code>, <code>-thick</code> and{' '}
      <code>-thicker</code> suffixes can be used to set the stroke weight.
    </p>
    <Icons names="angle-thinner angle-thin angle-light angle-medium angle-heavy angle-thick angle-thicker"/>

    <h2>Stroke Width</h2>
    <p>
      The <code>-strokewidth=N</code> suffix can be used to set the stroke width.
      You can use <code>px</code> or <code>pt</code> as units, but be warned
      that these depends on the original view box size of the icon.
    </p>
    <p>
      A percentage value for stroke-width is always computed as a
      percentage of the normalized viewBox diagonal length.
    </p>
    <p>
      If you specify a unitless value then it is assumed
      to be in 16ths of the icon size.  For a 1em (16px) icon, this
      corresponds to pixel units.  This is usually the best approach as it
      doesn&apos;t depend on you knowing the view box size of the original
      source icon SVG.
    </p>
    <Icons names="square-strokewidth=10px square-strokewidth=2 square-strokewidth=3 square-strokewidth=0.75"/>


    <h2>Cap and Corner Style</h2>
    <p>
      Stroked icons have rounded ends and corners by default (equivalent to
      explicitly adding the <code>-round</code> suffix).
      The <code>-square</code> suffix makes them sqaure.
    </p>
    <Icons names="angle-thick angle-thick-square"/>

    <h2>Direction</h2>
    <p>
      Icons are assumed to be pointing upwards by default.  Adding the{' '}
      <code>-up</code> suffix makes no difference, but you might prefer to add
      it to be explicit about which way the icon is supposed to be pointing.
      Adding the {' '}
      <code>-right</code> suffix rotates it 90&deg; to make it point right.
      The <code>-down</code> suffix rotates it 180&deg; to make it point down
      and <code>-left</code> rotates it 270&deg; to point left;

    </p>
    <Icons names="angle angle-up angle-right angle-down angle-left"/>

    <h2>Rotation</h2>
    <p>
      The <code>rotate=N</code> (or <code>rotate:N</code>) suffix can be
      used to rotate the icon through any angle.
    </p>
    <Icons names="angle-rotate=-60 angle-rotate=-30 angle angle-rotate=30 angle-rotate=60"/>

    <h2>Outline and Fill</h2>
    <p>
      Simple icons like these can be defined using a stroked path.  They
      have a default <code>outline</code> style.  You can explicitly add
      the <code>-outline</code> suffix if you like - it makes no difference.
      The <code>-fill</code> suffix will also fill the icon.  The{' '}
      <code>-solid</code> suffix fills the icon path and removes the outline.
    </p>
    <Icons names="square square-outline square-fill square-solid"/>

    <h2>Stroke and Fill Colors</h2>
    <p>
      The <code>-stroke=XXX</code> and <code>-fill=XXX</code> suffixes can
      be used to set the stroke and fill colors.
    </p>
    <Icons names="square square-stroke=red square-fill=#007fff"/>

    <h2>Opacity</h2>
    <p>
      The <code>-opacity=NN</code> suffix can be used to set the opacity.
      The stroke and fill opacity can be set separately with{' '}
      <code>-strokeopacity=NN</code> and <code>-fillopacity=NN</code>.
    </p>
    <Icons names="square-fill-opacity=50% square-fill-strokeopacity=0.5 square-fill-fillopacity=50%" />

    <h2>CSS Classes</h2>
    <p>
      CSS classes can be added to the end of an icon name, separated by
      periods.
    </p>
    <Icons
      names="arrow.blue.fgc-30 arrow.blue.fgc-50 arrow.blue.fgc-70"
    />
    */}
  </div>

export default Home