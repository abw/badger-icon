import React from 'react'
import Icons from '@/examples/Icons.jsx'

const IconsPage = () =>
  <div className="flow">
    <h1>Compound Icons</h1>
    <div className="cols-2 mar-b-8">
      <p>
        You can compose icons and apply modifiers to each individual part.
        Simply specify the name as each icon part separated with spaces.
      </p>
      <p>
        Here are some examples.
      </p>
    </div>
    <Icons
      names={[
        'square vertical',
        'square slash',
        'square plus',
        'square minus',
        'circle plus',
        'circle minus',
        'circle cross',
        'circle time',
        'square20 time',
        'folder plus-shrink=8-down=1-thickest',
        'page cross-shrink=8-down=2-thickest',
        'circle circle-shrink=7-solid',
        'square20 square10-shrink=7-solid',
        'square angles-down-shrink=6-thicker',
        'eye slash-strokewidth=4-nostroke.stroke-bg slash-thin-stroke=firebrick',
        'mobile slash-strokewidth=4-nostroke.stroke-bg slash-thin-stroke=firebrick',
        'cloud arrow-shrink=6-down=3-strokeWidth=6.stc-100.std-0 arrow-shrink=6-down=3-thick-stroke=green',
        'cloud arrow-down-shrink=6-down=6-strokeWidth=6.stc-100.std-0 arrow-down-shrink=6-down=6-thick-stroke=green',
        'trash-shrink=8-thick ban-stroke=firebrick-opacity=0.6',
        'clipboard-thin pen-shrink=10-down=1-thicker-stroke=dodgerblue',
      ]}
    />
    <div className="cols-2 mar-v-8">
      <p>
        You can also apply &quot;dotted&quot; CSS classes to each component
        part, allowing you to define stroke and fill colors or animations.
        You can, of course, define your own CSS classes to customise how
        icons are rendered.
      </p>
      <p>
        These examples use color classes (e.g. <code>.green</code>) from{' '}
        <a href="https://abw.github.io/badger-css/">Badger CSS</a> along with
        additional <code>flc-NN</code> and <code>stc-NNN</code> classes to
        set the color stop for fill and stroke, respectively.
      </p>
    </div>
    <Icons
      names={[
        'user.flc-80.fld-20 plus-shrink=8-up=2-right=6-thick.green.stc-50',
        'square.green.stc-30.flc-40 check-shrink=6-thick.grey.stc-100',
        'circle.red.stc-30.flc-40 cross-shrink=6-thick.grey.stc-100',
        'triangle-thinner.orange.flc-50.stc-40 exclamation-shrink=8-down=1.5.orange.stc-90',
        'heart.red.stc-30.flc-50.beat', 'cog.violet.stc-40.flc-60.spin'
      ]}
    />
  </div>

export default IconsPage