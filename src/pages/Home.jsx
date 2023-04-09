import React      from 'react'
import Link       from '../site/Link.jsx'
import { imgUrl } from '../site/Utils.jsx'
import Examples from '../section/Examples.jsx'
import Control from '../section/Control.jsx'
import Icons from '../../lib/Utils/Icons.jsx'
import Icon from '../../lib/Icon.jsx'

const Home = () =>
  <div className="">
    <h1>@abw/react-icon</h1>
    <a href="https://github.com/abw/react-icon" className="github">
      <img
        src="https://github.githubassets.com/favicons/favicon.svg"
        alt="Github repository"
      />
    </a>
    <div className="pic-side">
      <img src={imgUrl('badger.svg')}/>
      <div className="blurb">
        <p className="intro">
          <code className="code">react-icon</code> is a prototype for a
          React library to compose icons.
        </p>
        <p>
          This site was scaffolded by{' '}
          <a href="https://github.com/abw/scaffold-js">@abw/scaffold</a>.
        </p>
      </div>
    </div>
    <h2>Control</h2>
    <Control/>

    <h2>Rotated Icons</h2>
    <div className="debug-icons">
      <Icon name="arrow-up" className="fa-6x"/>
      <Icon name="arrow-up" className="fa-6x right"/>
      <Icon name="arrow-up" className="fa-6x down"/>
      <Icon name="arrow-up" className="fa-6x left"/>
    </div>

    <h2>Stacked Icons</h2>
    <Icons className="fa-8x">
      <Icon name="square.fill"/>
      <Icon name="check" color="white" transform="shrink-6"/>
    </Icons>
    <Icons className="fa-8x">
      <Icon name="square"/>
      <Icon name="cross.thick" color="blue" transform="shrink-6"/>
    </Icons>
    <Icons className="fa-8x">
      <Icon name="circle"/>
      <Icon name="circle.fill" color="teal" transform="shrink-6"/>
    </Icons>
    <Icons className="fa-8x">
      <Icon name="square20"/>
      <Icon name="square10.fill" color="magenta" transform="shrink-6"/>
      <Icon name="check.thicker.opacity=50%" color="white" transform="shrink-10"/>
    </Icons>
    <Icons className="fa-8x">
      <Icon name="square20.fill" color="orange"/>
      <Icon name="point-up.fill.opacity=50%" color="white" transform="shrink-6"/>
      <Icon name="square20.thin.opacity=50%" color="white"/>
    </Icons>

    <h2>Icons</h2>
    <Examples/>
    <div>
      <ul className="large menu">
        <li>
          <Link to="getting-started" text="Getting Started"/> - adding the module to your project.
        </li>
      </ul>
    </div>
    <div className="badger">
      <img src={imgUrl('badger.svg')} alt="badger"/>
      <div className="caption">
        Built by Badgers
      </div>
    </div>
  </div>

export default Home

