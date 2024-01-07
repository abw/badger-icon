import React      from 'react'
import CodeBlock  from '@/site/CodeBlock.jsx'
import Render     from './_examples/render-icon?raw'
import ImportIcon from './_examples/import-icon?raw'
import CheckData  from './_examples/check-data?raw'
import IconTiles  from '@/examples/Icons.jsx'
import Badger     from '@/svg/badger-icon.svg?react'
import Link       from '@/ui/Link.jsx'
import { now }    from '@abw/badger-timestamp'
import { useState } from 'react'
import { useEffect } from 'react'
import { Icon } from '@/lib/index.js'

const Home = () =>
  <div className="container-mobile flow">
    <Badger className="bi-logo mar-t-4"/>
    <h2 className="medium font-mono mar-t-8">NPM: @abw/badger-icon</h2>
    <p className="large">
      This is a work in progress for rendering SVG icons in React.
      It has an emphasis on flexibility, while reducing the size of the
      data you need to define for icons.
    </p>
    <p>
      Here are some of the icons that it can generate from a very small
      data set of primitives.
    </p>
    <div className="flex space">
      <Icon
        name="square.flc-50.stc-30 check-thick-shrink=6-drawlength=600-drawtime=500ms.stc-100.draw"
        className="violet x6"
      />
      <Icon
        name="circle.flc-50.stc-40 cog-thin-shrink=7.stc-80.flc-40.spin.slow"
        className="green x6"
      />
      <Icon
        name="square20.flc-60.stc-40 heart-thin-shrink=7.stc-80.flc-50.beat"
        className="red x6"
      />
      <Time className="x6 orange"/>
      {/*
      <Icons
        names="circle.flc-60.stc-30 hour.shrink=2.stc-40.spin.slow hour.stc-45.spin.fast "
        className="orange x5"
      />
      */}
    </div>

    <h2 className="mar-t-12">Minimal Icon Data</h2>
    <p>
      What makes this interesting is that a single icon can be defined in a
      library and then rendered in many different styles.
    </p>
    <p>
      For example, the icon data for a check mark (aka &quot;tick&quot;) is
      about as simple as it can be:
    </p>
    <CodeBlock
      code={CheckData}
      language="js"
      className=""
      expand
    />
    <p>
      For those that aren&apos;t familiar with SVG path data, this is an
      instruction to move to coordinates 48,248 (<code>M48,248</code>), draw
      a line to 192, 392 (<code>L192,392</code>) and then a line to 464,120
      (<code>L464,120</code>).
    </p>
    <p>
      The default coordinate size for an icon is 512
      x 512, which is large enough to allow us to use only integer coordinates
      without any noticeable loss of precision.
      You can define a different size as the default for all icons, or set
      specific sizes for individual icons.
    </p>
    <p>
      To render this icon you need to{' '}
      <Link to="/getting-started/installation" text="install the library"/> and
      then import the <code>Icon</code> component
      from <code>@abw/badger-icon</code>.
    </p>
    <CodeBlock
      code={ImportIcon}
      language="jsx"
      expand
    />
    <p>
      Then insert the <code>Icon</code> component wherever you need
      an icon, specifying the icon by the <code>name</code> property.
    </p>
    <CodeBlock
      code={Render}
      language="jsx"
      expand
    />
    <p>
      This is what it looks like: <Icon name="check"/>
    </p>
    <p>
      Here&apos;s the big version that we&apos;ll be using in these examples
      so you don&apos;t have to squint to see it.
    </p>
    <IconTiles
      names="check"
    />
    <p className="mar-t-8">
      A number of basic icons, including this one, are provided in the{' '}
      <Link to="getting-started/icons" text="default library"/>.
    </p>
    <p>
      You can add any number of{' '}
      <Link to="/modifiers" text="modifiers"/> to the end of the name to change the
      appearance.  These should be separated by hyphens.  You can also add
      CSS classes to the end of the name, separated by periods.
    </p>
    <IconTiles
      names="check-thick check-thicker-square check-thickest-square.green.fgc-50"
    />

    <h2 className="mar-t-12">Stroke Width</h2>
    <p>
      An icon can be rendered in any of six additional pre-defined line
      thicknesses.  All you need to do
      is add one of the stroke width modifiers to the name, e.g.{' '}
      <code>-thin</code>, <code>-thick</code>, etc.
    </p>
    <IconTiles
      names="check-thinnest check-thinner check-thin check-thick check-thicker check-thickest"
    />
    <p className="mar-t-8">
      Or you can set any other stroke width using the <code>-strokewidth</code>{' '}
      modifier with a value.  This can be specified in pixel, points or as a
      percentage. Or you can use unitless numbers, as shown here, which are
      proportional to the icon size.  The benefit of this approach is that
      they don&apos;t depend on you knowing the coordinate size for the icon
      data.
    </p>
    <IconTiles
      names="check-strokewidth=2 check-strokewidth=3.5 check-strokewidth=5"
    />

    <h2 className="mar-t-12">Rounded or Square</h2>
    <p>
      You can change the line endings and corners from the default (rounded)
      to square by adding the <code>-square</code> modifier.
    </p>
    <IconTiles
      names="check check-square"
    />

    <h2 className="mar-t-12">Orientation</h2>
    <p>
      You can rotate an icon through 90&deg;, 180&deg; and 270&deg; by adding
      the <code>-right</code>, <code>-down</code> and <code>-left</code> modifiers,
      respectively.  The <code>-up</code> modifier is also provided for
      completeness, although it does&apos;t have any effect.  For example, we
      only need to define the data for one <code>arrow</code> icon, but we
      get the other three directions icons thrown in for free.
    </p>
    <IconTiles
      names="arrow arrow-up"
    />
    <IconTiles
      names="arrow-left arrow-down arrow-right"
    />

    <h2 className="mar-t-12">Rotation</h2>
    <p>
      If the four cardinal directions aren&apos;t enough then you can use the{' '}
      <code>-rotate</code> modifier to rotate an icon to any angle.
    </p>
    <IconTiles
      names="arrow-rotate=240 arrow arrow-rotate=120"
    />

    <h2 className="mar-t-12">Flipping</h2>
    <p>
      You can use the <code>-flipx</code> and <code>-flipy</code> modifiers
      to flip the icon horizontally and vertically.  Or both!
    </p>
    <IconTiles
      names="thumb thumb-flipx thumb-flipy"
    />

    <h2 className="mar-t-12">Sizing</h2>
    <p>
      You can change the size of the icon within the viewbox using the {' '}
      <code>-shrink</code> and <code>-grow</code> modifiers.  These work in a
      similar way to the Font Awesome modifiers which inspired them.  The
      units are 1/16th of the icon size, equating to 1px when an icon is
      displayed at 1em.
    </p>
    <IconTiles
      names="check check-shrink=4 check-shrink=8 check check-grow=4 check-grow=8"
    />

    <h2 className="mar-t-12">Styling by CSS</h2>
    <p>
      You can style icons with CSS classes.  Add them to the end of the name
      separated by periods.  These examples use color utilities provided by{' '}
      <a href="https://abw.github.io/badger-css/">Badger CSS</a> to set the
      stroke and fill colors.
    </p>
    <IconTiles
      names={[
        'square.red.stc-30.flc-70', 'square.red.stc-50.flc-80', 'square.red.stc-70.flc-90',
        'square.green.stc-30.flc-70', 'square.green.stc-50.flc-80', 'square.green.stc-70.flc-90',
        'square.blue.stc-30.flc-70', 'square.blue.stc-50.flc-80', 'square.blue.stc-70.flc-90',
      ]}
    />
    <p className="mar-t-8">
      You can also use CSS classes to apply animations.
    </p>
    <IconTiles
      names={[
        'cog.spin', 'heart.beat', 'rotate.spin.slow'
      ]}
    />

    <h2 className="mar-t-12">Composability</h2>
    <p>
      The icons are designed to be composed to make more complex icons.
      For example, you don&apos;t need a dedicated icon for a checkbox when
      you can compose it from a square and a check mark.
    </p>
    <div className="popout pad-v-8 border bgc-70 bdc-60 bgd-30 bdd-40 shadow-2">
      <div className="flex space wrap x5">
        <Icon name="square"/>
        <Icon name="plus"/>
        <Icon name="check"/>
        <Icon name="equals"/>
        <Icon name="square check-shrink=6-thicker" />
      </div>
    </div>
    <p className="mar-t-8">
      Or if you want icons to represent an ascending or descending sort,
      using either alpha or numerical sorting, then you can compose
      it from primitives.
    </p>
    <div className="popout pad-v-8 border bgc-70 bdc-60 bgd-30 bdd-40 shadow-2">
      <div className="flex space wrap x5">
        <Icon name="point-up"/>
        <Icon name="plus"/>
        <Icon name="alpha"/>
        <Icon name="equals"/>
        <Icon name="point-up alpha-shrink=10-thicker" />
      </div>
    </div>
    <div className="popout pad-v-8 border bgc-70 bdc-60 bgd-30 bdd-40 shadow-2">
      <div className="flex space wrap x5">
        <Icon name="point-down"/>
        <Icon name="plus"/>
        <Icon name="number"/>
        <Icon name="equals"/>
        <Icon name="point-down number-shrink=10-thicker" />
      </div>
    </div>

    <p className="mar-t-8">
      Put it all together and you can make all sorts of interesting icons.
    </p>
    <div className="popout pad-v-8 border bgc-70 bdc-60 bgd-30 bdd-40 shadow-2">
      <div className="flex space wrap x5">
        <Icon name="square.flc-50.stc-30.violet.x5"/>
        <Icon name="plus"/>
        <Icon name="check-thick-shrink=6.stc-100.violet"/>
        <Icon name="equals"/>
        <Icon
          name="square.flc-50.stc-30 check-thick-shrink=6.stc-100"
          className="violet x5"
        />
      </div>
    </div>
    <div className="popout pad-v-8 border bgc-70 bdc-60 bgd-30 bdd-40 shadow-2">
      <div className="flex space wrap x5">
        <Icon name="circle.flc-50.stc-40.green.x5"/>
        <Icon name="plus"/>
        <Icon name="cog-thin-shrink=7.stc-80.flc-40.spin.slow.green.x5"/>
        <Icon name="equals"/>
        <Icon
          name="circle.flc-50.stc-40 cog-thin-shrink=7.stc-80.flc-40.spin.slow"
          className="green x5"
        />
      </div>
    </div>
    <div className="popout pad-v-8 border bgc-70 bdc-60 bgd-30 bdd-40 shadow-2">
      <div className="flex space wrap x5">
        <Icon name="square20.flc-60.stc-40.red.x5"/>
        <Icon name="plus"/>
        <Icon name="heart-thin-shrink=7.stc-80.flc-50.beat.red.x5"/>
        <Icon name="equals"/>
        <Icon
          name="square20.flc-60.stc-40 heart-thin-shrink=7.stc-80.flc-50.beat"
          className="red x5"
        />
      </div>
    </div>

    {/*
      <Icons
        names="circle.flc-60.stc-30 hour.shrink=2.stc-40.spin.slow hour.stc-45.spin.fast "
        className="orange x5"
      />
      */}


    {/*
    <h2>SVG Icons are Great!</h2>
    <h2>What Makes Them Great?</h2>
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
    <div className="popout brand bgc-30 fgc-90 hdc-100 grid-2 gap-4 pad-v-6">
      <div>
        <h3>Pros</h3>
        <ul className="pad-l-4">
          <li>Quick and easy!</li>
          <li>No duplication of SVG data</li>
        </ul>
      </div>
      <div>
        <h3>Cons</h3>
        <ul className="pad-l-4">
          <li>Extra network request</li>
          <li>Cannot style with CSS</li>
        </ul>
      </div>
    </div>
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
    <div className="popout brand bgc-30 fgc-90 hdc-100 grid-2 gap-4 pad-v-6">
      <div>
        <h3>Pros</h3>
        <ul className="pad-l-4">
          <li>No additional network request</li>
          <li>Stylable via CSS</li>
        </ul>
      </div>
      <div>
        <h3>Cons</h3>
        <ul className="pad-l-4">
          <li>Page bloat</li>
          <li>Duplication of SVG data</li>
        </ul>
      </div>
    </div>


    <h2>Stroke Width</h2>
    <p>
      The <code>-strokewidth=N</code> suffix can be used to set the stroke width.
      You can use <code>px</code> or <code>pt</code> as units, but be warned
      that these depends on the original view box size of the icon.
    </p>
    <p>
      A percentage value for stc-width is always computed as a
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
    <Icons names="square-flc-opacity=50% square-flc-strokeopacity=0.5 square-flc-fillopacity=50%" />

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

const getTime = () => {
  const time = now()
  const hour = time.hours()
  const mins = time.minutes()
  const secs = time.seconds()
  const hrot = (30 * (hour % 12)) + mins / 2
  const mrot = 6 * mins
  const srot = 6 * secs
  return {
    hour, mins, secs, hrot, mrot, srot
  }
}

const Time = ({ className }) => {
  const [time, setTime] = useState(getTime())
  useEffect(
    () => {
      const interval = setInterval(
        () => setTime(getTime()),
        1000
      )
      return () => clearInterval(interval)
    },
    []
  )
  const { hrot, mrot, srot } = time

  return (
    <Icon
      name={[
        `circle.flc-80.stc-40`,
        `prime-thinner-grow=4-rotate=${mrot}-opacity=0.7.stc-30`,
        `prime-thin-shrink=4-rotate=${hrot}.stc-30`,
        `prime-strokeWidth=0.5-grow=7-rotate=${srot}-opacity=0.6.stc-45`,
      ]}
      className={className}
    />
  )
}

export default Home