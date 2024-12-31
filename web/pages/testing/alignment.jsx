import React from 'react'
import { Icon } from '@/lib/index'

const Testing = () =>
  <div>
    <h1>Alignment</h1>
    <p>
      How well do icons align with other text?
    </p>
    <div className="grid-1 gap-8">
      <Align className="flex middle gap-2"/>
      <Align className="large flex middle gap-2"/>
      <Align className="flex baseline gap-2"/>
      <Align className="larger flex baseline gap-2"/>
    </div>

  </div>

const Align = ({ className }) =>
  <div className="paper border pad-a-3">
    <div className="font-mono smaller mar-b-2">{className}</div>
    <div className={className}>
      <Icon name="bars"/>
      <div>Some text</div>
      <Icon name="square slash"/>
      <Icon name="circle"/>
    </div>
  </div>


export default Testing