import React from 'react'
import Icons from '@/examples/Icons.jsx'

const StrokeWidth = () =>
  <div className="flow">
    <h1>Modifiers</h1>
    <h2>Stroke Width</h2>
    <div className="cols-2">
      <p>
        The <code>strokeWidth=NN</code> modifier can be used to set the
        stroke width to any arbitrary amount.
      </p>
      <p>
        If you dont&apos;t specify a unit for the value then it is assumed
        to be in 16ths of the icon size.  For a 1em (16px) icon, this
        corresponds to pixel units.  This is usually the best approach as it
        doesn&apos;t depend on you knowing the view box size of the original
        source icon SVG.
      </p>
    </div>
    <Icons names="arrow-strokeWidth=1 arrow-strokeWidth=2 arrow-strokeWidth=3"/>

    <h2>Pixels and Points</h2>
    <p className="cols-2">
      You can also specify the stroke width using <code>px</code> or{' '}
      <code>pt</code> units, although these will depend on the size of the
      view box for the original SVG source icon.  For example, if the icon
      was specified with a view box sized 24px by 24px then a stroke width
      of 1px will be 1/24th of the total size.  However if the view box was
      64px by 64px then it will only be 1/64th.
    </p>
    <Icons names="arrow-strokeWidth=12px arrow-strokeWidth=24px arrow-strokeWidth=48px"/>

    <h2>Percentage</h2>
    <p className="cols-2">
      The final option is to specify the stroke width as a percentage.
      According to the SVG specification: <i>&quot;A percentage value for
      stroke width is always computed as a percentage of the normalized
      viewBox diagonal length&quot;</i>.  For a square icon, a stroke width
      of 4.42% corresponds to 1/16th of the icon height, or 1px for an icon
      displayed at a size of 1em / 16px. This is the multiplying factor used
      when you specify a stroke width without any units (e.g.{' '}
      <code>strokeWidth=1</code> is the same as <code>strokeWidth=4.42%</code>).
    </p>
    <Icons names="arrow-strokeWidth=4.42% arrow-strokeWidth=8.84% arrow-strokeWidth=13.26%"/>
  </div>

export default StrokeWidth