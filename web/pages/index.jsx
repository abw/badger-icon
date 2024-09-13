import React, { useState, useEffect } from 'react'
import Render     from './_examples/render-icon?raw'
import ImportIcon from './_examples/import-icon?raw'
import CheckData  from './_examples/check-data?raw'
import IconTiles  from '@/examples/Icons.jsx'
import Badger     from '@/svg/badger-icon.svg?react'
import { now }    from '@abw/badger-timestamp'
import { Icon }   from '@/lib/index.js'
import { Hero, Source, Link, PeopleWhoShare } from '@abw/badger-website'

const Home = () =>
  <div className="flow">
    <Hero
      logo={<Badger className="bi-logo"/>}
      title="React SVG Icons"
      tagline="Built by Badgers"
      overview="A React component for rendering SVG icons"
      underview="With an emphasis on flexibility, composability and minimal icon data size"
    />
    <p className="large">
      Badger Icon is a small, lightweight React component for rendering SVG
      icons.  It comes with a small set of basic icons but it&apos;s not
      really intended to be an icon library in itself.  Rather, it provides
      the mechanism for rendering icons and allows you to add in icons from
      any other icon set or your own custom SVG files.
    </p>
    <p>
      What makes it unique is that it allow base icons to be rendered in
      countless different ways and composed to create more complex icons.
      Here are some of the icons that it can generate from the set of basic
      icon primitives.
    </p>
    <div className="conform-mobile">
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
      </div>
    </div>
    <h2 className="mar-t-12">Minimal Icon Data</h2>
    <p>
      An icon can be defined in a library using a compact data format and then
      rendered in many different styles.
    </p>
    <p>
      For example, the icon data for a check mark (aka &quot;tick&quot;) is
      about as simple as it can be:
    </p>
    <Source
      code={CheckData}
      language="js"
      caption="Check mark icon data"
      expand
    />
    <p>
      For those that aren&apos;t familiar with SVG path data, this is an
      instruction to move to coordinates 48,248 (<code>M48,248</code>), draw
      a line to 192, 392 (<code>L192,392</code>) and then a line to 464,120
      (<code>L464,120</code>).  The majority of icons are created using path
      data so this is the default.  But you can also define icon components
      using rectangles, circles, ellipses, lines, polygons and polylines,
      or any combination of them.  Or you can define icons using raw SVG
      text for those cases where you want to include more complicated icons
      from other icon sets or your own designs.
    </p>
    <p>
      The default coordinate size for an icon is 512
      x 512, which is large enough to allow us to use only integer coordinates
      without any noticeable loss of precision.
      You can define a different size as the default for all icons, or set
      specific sizes for individual icons.
    </p>
    <p>
      To render an icon you need to{' '}
      <Link to="/getting-started/installation" text="install the library"/> and
      then import the <code>Icon</code> component
      from <code>@abw/badger-icon</code>.
    </p>
    <Source
      code={ImportIcon}
      language="jsx"
      expand
    />
    <p>
      Then insert the <code>Icon</code> component wherever you need
      an icon, specifying the icon by the <code>name</code> property.
    </p>
    <Source
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
      names="arrow arrow-up arrow-left arrow-down arrow-right"
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
      names="check-shrink=8 check-shrink=4 check check-grow=4 check-grow=8"
    />
    <IconTiles
    />

    <h2 className="mar-t-12">Styling by CSS</h2>
    <p>
      You can style icons with CSS classes.  Add them to the end of the name
      separated by periods.  These examples use color utilities provided by{' '}
      <a href="https://badgerpower.com/badger-css/">Badger CSS</a> to set the
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
    <p>
      The icon <code>name</code> property can include multiple icon
      specifications, each separate by one or more whitespace characters.
      Each of the icon components will be displayed stacked together.
    </p>
    <Compose
      icons={[
        'square',
        'check',
        'square check-shrink=6-thicker'
      ]}
    />
    <p className="mar-t-8">
      Or if you want icons to represent an ascending or descending sort,
      using either alpha or numerical sorting, then you can compose
      it from primitives.
    </p>
    <Compose
      icons={[
        'point-up',
        'alpha',
        'point-up-thin alpha-shrink=11-down=1-thicker'
      ]}
    />
    <Compose
      icons={[
        'point-down',
        'number',
        'point-down-thin alpha-shrink=11-up=1-thicker'
      ]}
    />

    <p className="mar-t-8">
      Put it all together and you can make all sorts of interesting icons.
    </p>
    <Compose
      icons={[
        'square.flc-50.stc-30.violet.x5',
        'check-thick-shrink=6.stc-100.violet',
        'square.flc-50.stc-30.violet.x5 check-thick-shrink=6.stc-100.violet'
      ]}
    />
    <Compose
      icons={[
        'circle.flc-50.stc-40.green.x5',
        'cog-thin-shrink=7.stc-80.flc-40.spin.slow.green.x5',
        'circle.flc-50.stc-40.green.x5 cog-thin-shrink=7.stc-80.flc-40.spin.slow.green'
      ]}
    />
    <Compose
      icons={[
        'square20.flc-60.stc-40.red.x5',
        'heart-thin-shrink=7.stc-80.flc-50.beat.red.x5',
        'square20.flc-60.stc-40.red.x5 heart-thin-shrink=7.stc-80.flc-50.beat.red'
      ]}
    />

    <PeopleWhoShare>
      <p className="bold mar-b-4">
        This is a work in progress and liable to change at any time!
      </p>
    </PeopleWhoShare>
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

const Compose = ({ icons }) =>
  <div className="conform-mobile pad-v-8 surface-3">
    <div className="flex space middle wrap">
      <Icon name={icons[0]} className="x5"/>
      <Icon name="plus" className="x3 stc-70 std-30"/>
      <Icon name={icons[1]} className="x5"/>
      <Icon name="equals" className="x3 stc-70 std-30"/>
      <Icon name={icons[2]} className="x5"/>
    </div>
  </div>

export default Home