import React from 'react'
import Icons from '@/examples/Icons.jsx'
import { useTheme } from '@abw/react-night-and-day'

const LADToggle = () => {
  const {
    setDark,      // set theme to 'dark'
    setLight,     // set theme to 'light'
  } = useTheme()
  return <>
    <span onClick={setLight} className="hover">light</span> and{' '}
    <span onClick={setDark} className="hover">dark</span>
  </>
}

const Colors = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <h2>Stroke and Fill Colors</h2>
    <div className="cols-2">
      <p>
        The <code>stroke=COLOR</code> modifier can be used to set the
        stroke to any color.  You can use any valid SVG color, including CSS
        color names, hex colors, RGB colors and HSL colors, as shown in these
        examples.
      </p>
    </div>
    <Icons names="square-stroke=orangered square-stroke=#ff4500 square-stroke=rgb(255,69,0) square-stroke=hsl(16,100%,50%)"/>
    <div className="cols-2">
      <p>
        The <code>fill=COLOR</code> modifier can be used to set the
        fill to any color.
      </p>
    </div>
    <Icons names="square-fill=orangered square-fill=#ff4500 square-fill=rgb(255,69,0) square-fill=hsl(16,100%,50%)"/>
    <div className="cols-2">
      <p>
        Note that the default stroke color for outline icons (like the{' '}
        <code>square</code> icon in the examples above) is <code>currentColor</code>.
        This is the current color styled via CSS and on this site, the color
        is different in <LADToggle/> modes.
      </p>
      <p>
        If this isn&apos;t what you want then you can set it to another color
        using the <code>stroke=COLOR</code> modifier (including <code>none</code> as
        a valid SVG color), set the stroke width to{' '}
        0 using the <code>strokewidth=0</code> modifier, or disable the default
        stroke color using the <code>nostroke</code> modifier.
      </p>
    </div>
    <Icons names="square-fill=orangered-stroke=darkred square-fill=orangered-stroke=none square-fill=orangered-strokewidth=0 square-fill=orangered-nostroke"/>
    <div className="cols-2">
      <p>
        You can also use CSS classes to set the fill and stroke colors.
        In these examples we use the CSS classes provided by{' '}
        <a href="https://abw.github.io/badger-css/">Badger CSS</a> to select
        a color range (e.g. <code>orange</code>) and color stops for the
        stroke (<code>stc-NN</code>) and fill (<code>flc-NN</code>).  You
        can also specify different colors for dark mode (<code>std-NN</code>{' '}
        and <code>fld-NN</code> respectively).  Toggle between <LADToggle/> modes
        to see the effect.  The first icon below uses the same colors in both
        modes, whereas the second uses different colors.
      </p>
    </div>
    <Icons names="square.orange.stc-40.flc-60 square.orange.stc-70.flc-80.std-30.fld-20"/>

  </div>

export default Colors