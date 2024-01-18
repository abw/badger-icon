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
        'square',
        'square plus',
        'square minus',
        'circle plus',
        'circle minus',
        'circle cross',
        'circle time',
        'square20 time',
        'square angles-down-shrink=6-thicker',
        'eye slash-thickest.stc-100.std-0 slash-thin',
        'mobile slash-thickest.stc-100.std-0 slash-thin',
        'cloud arrow-shrink=6-down=3-thick',
        'cloud arrow-down-shrink=6-down=6-thick',
        'ban-thin trash-shrink=8-thick',
        'clipboard-thin pen-shrink=10-down=1-thicker',
      ]}
    />
    <div className="cols-2 mar-v-8">
      <p>
        You can also apply &quot;dotted&quot; CSS classes to each component
        part, allowing you to define stroke and fill colors or animations.
      </p>
      <p>
        These examples use color classes (e.g. <code>.green</code>) with
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