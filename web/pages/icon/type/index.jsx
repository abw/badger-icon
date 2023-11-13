import React        from 'react'
import Fill         from './_examples/Fill.jsx'
import FillSource   from './_examples/Fill.jsx?raw'
import Line         from './_examples/Line.jsx'
import LineSource   from './_examples/Line.jsx?raw'
import Thin         from './_examples/Thin.jsx'
import ThinSource   from './_examples/Thin.jsx?raw'
import Thick        from './_examples/Thick.jsx'
import ThickSource  from './_examples/Thick.jsx?raw'
import Path         from './_examples/Path.jsx'
import PathSource   from './_examples/Path.jsx?raw'
import Example      from '@/site/Example.jsx'
import Link         from '@/ui/Link.jsx'
import { useTheme } from '@abw/react-night-and-day'

const Type = () => {
  const { setLight, setDark } = useTheme()

  return (
    <div className="flow">
      <h1>Icon</h1>
      <h2 className="font-mono">type</h2>
      <p className="cols-2">
        The <code>type</code> property can be used to set style parameters
        for the icon.  The default value for <code>type</code> is{' '}
        <code>fill</code> which sets the fill color to be{' '}
        <code>currentColor</code>.  Try toggling between {' '}
        <span className="hover" onClick={setLight}>light</span> and{' '}
        <span className="hover" onClick={setDark}>dark</span> themes to see the fill color
        change.
      </p>
      <Example
        Component={Fill}
        code={FillSource}
        undent={4}
        expand
      />

      <p className="cols-2">
        The <code>line</code> style will set the stroke color to{' '}
        <code>currentColor</code> and the <code>fill</code> to <code>none</code>.
      </p>
      <Example
        Component={Line}
        code={LineSource}
        undent={4}
        expand
      />

      <p className="cols-2">
        The <code>type</code> can contain multiple{' '}
        <Link to="/modifiers" text="modifiers"/> separated
        by hyphens.  For example, we can set the stroke weight to be{' '}
        <code>thin</code>...
      </p>
      <Example
        Component={Thin}
        code={ThinSource}
        undent={4}
        expand
      />

      <p className="cols-2">
        ...or <code>thicker</code> with <code>square</code> corners and
        end caps.
      </p>
      <Example
        Component={Thick}
        code={ThickSource}
        undent={4}
        expand
      />

      <p className="cols-2">
        As a short-cut, the <code>type</code> can be provided as a prefix on
        the <code>path</code>, separated by a colon.
      </p>
      <Example
        Component={Path}
        code={PathSource}
        caption="path"
        undent={4}
        expand
      />
    </div>
  )
}

export default Type