import React      from 'react'
import Name       from './_examples/Name.jsx'
import NameSrc    from './_examples/Name.jsx?raw'
import Mods       from './_examples/Mods.jsx'
import ModsSrc    from './_examples/Mods.jsx?raw'
import Classes    from './_examples/Classes.jsx'
import ClassesSrc from './_examples/Classes.jsx?raw'
import Icons      from '@/examples/Icons.jsx'
import IconData   from '@/lib/IconData.js'
import Example    from '@/site/Example.jsx'
import Link from '@/web/ui/Link.jsx'

const IconName = () =>
  <div className="flow">
    <h1>Icon</h1>
    <h2 className="font-mono">name</h2>
    <p className="cols-2">
      The <code>name</code> property can be used to select an icon from the
      default icon library.
    </p>
    <Example
      Component={Name}
      code={NameSrc}
      undent={4}
      expand
    />

    <h2>Modifiers</h2>
    <div className="cols-2">
      <p>
        You can add <Link to="/modifiers">modifiers</Link> to the end of
        an icon name to change the style, size, orientation or position of
        an icon.  Each should be separated by a hyphen.
      </p>
      <p>
        For example, the <code>right</code> modifier rotates an icon through
        90&deg; so that it&apos;s pointing to the right, the{' '}
        <code>thicker</code> modifier sets a thicker stroke width, and so on.
      </p>
    </div>
    <Example
      Component={Mods}
      code={ModsSrc}
      undent={4}
      expand
    />

    <h2>CSS Classes</h2>
    <div className="cols-2">
      <p>
        You can add CSS classes to the end of an icon name to have them
        added to the icon.  Each should be separated by a period.
        Classes should be added after any modifiers.
      </p>
      <p>
        Classes can contain hyphens (e.g. <code>shadow-2</code>) and modifier
        parameters can contain periods (e.g. <code>opacity=0.5</code>).
        The first period in an icon name is <i>usually</i> treated as the
        start of a list of classes <i>unless</i> it appears immediately
        before a number.  Thus, the period in <code>0.5</code> is treated
        as part of the number and does not indicate the start of the classes
        section.  Hyphens are used to separate modifiers <i>before</i> the
        first period marking the start of the classes section.  After that,
        periods are used to separate classes and hyphens can be safely
        included in class names.
      </p>
    </div>
    <Example
      Component={Classes}
      code={ClassesSrc}
      undent={4}
      expand
    />
    <h2>Name Tokenisation Example</h2>
    <div className="cols-2">
      <p>
        Here&apos;s an example to help clarify how a complex name is tokenised.
      </p>
    </div>
    <div>
      <div className="smaller">Name</div>
      <div className="flex">
        <div className="large font-mono border pad-v-2 pad-h-4 surface-5 shadow-2">
          <span className="red fgc-50">arrow</span>-<span className="orange fgc-50">rotate=-45-opacity=0.4</span>.<span className="yellow fgc-50">x2.shadow-2</span><br/>
        </div>
      </div>
    </div>
    <div className="flex start gap-4 stack-laptop">
      <div>
        <div className="smaller red fgc-50 fgd-60">Icon</div>
        <div className="large font-mono border pad-v-2 pad-h-4 surface-5 red shadow-2 mar-b-4">
          arrow
        </div>
      </div>
      <div className="mar-b-4">
        <div className="smaller orange fgc-50 fgd-60">Modifiers</div>
        <div className="large font-mono border pad-v-2 pad-h-4 surface-5 orange shadow-2 mar-b-4">
          rotate=-45-opacity=0.4
        </div>
        <div className="flex start gap-4 stack-tablet">
          <div className="large font-mono border pad-v-2 pad-h-4 surface-3 orange shadow-2 mar-b-4">
            rotate=-45
          </div>
          <div className="large font-mono border pad-v-2 pad-h-4 surface-3 orange shadow-2 mar-b-4">
            opacity=0.4
          </div>
        </div>
      </div>
      <div>
        <div className="smaller yellow fgc-50 fgd-60">Classes</div>
        <div>
          <div className="large font-mono border pad-v-2 pad-h-4 surface-5 yellow shadow-2 mar-b-4">
            x2.shadow-2
          </div>
        </div>
        <div className="flex gap-4 stack-tablet">
          <div className="large font-mono border pad-v-2 pad-h-4 surface-3 yellow shadow-2 mar-b-4">
            x2
          </div>
          <div className="large font-mono border pad-v-2 pad-h-4 surface-3 yellow shadow-2 mar-b-4">
            shadow-2
          </div>
        </div>
      </div>
    </div>
    <div className="cols-2">
      <p>
        Working from right to left, the CSS classes start at the first period
        that isn&apos;t immediately before a number.  That rules out the period
        in the value of <code>0.4</code> for <code>opacity</code>.
      </p>
      <p>
        So the CSS classes start just after that, with <code>x2</code> being the first
        CSS class.  The CSS classes are then split on periods, giving us{' '}
        <code>x2</code> and <code>shadow-2</code>.
      </p>
      <p>
        Everything before that point is then split on hyphens, excluding
        any that come immediately before a number.  So the hyphen in
        the <code>-45</code> value for <code>rotate</code> is treated as a
        minus sign rather than a delimited.  The result is that this part is
        split into three tokens: <code>arrow</code>, <code>rotate=-45</code>{' '}
        and <code>opacity=0.4</code>.
      </p>
      <p>
        The icon name is the longest leading subset of those components that
        matches a name in the icon library.  In this case it&apos;s just{' '}
        <code>arrow</code>, but you can have an icon name with hyphens in it,
        e.g. <code>arrow-alt</code>, and the algorithm will use that for the
        name.
      </p>
      <p>
        Any tokens remaining after the icon name has been resolved
        are assumed to be modifiers.  In this example, that&apos;s{' '}
        <code>rotate=-45</code> and <code>opacity=0.4</code>.
      </p>
    </div>

    <h2>Default Icons</h2>
    <div className="cols-2">
      <p>
        In most cases you&apos;ll want to define your own icon library
        including only the icons that you want to use in a project.
        However, some basic icons are included as a starting point.
      </p>
      <p>
        Note that there&apos;s only one of each basic icon.  There isn&apos;t
        an explicit <code>arrow-right</code> icon defined, for example,
        because specifying <code>arrow-right</code> as an icon name will
        use the <code>arrow</code> icon and apply the <code>right</code>{' '}
        modifier to rotate it to point to the right.
      </p>
    </div>
    <Icons names={Object.keys(IconData)}/>
  </div>

export default IconName