import React from 'react'
import { Icon } from '@/lib/index'

const Testing = () =>
  <div>
    <h1>Scaling</h1>
    <p>
      Can we make icons scale?
    </p>
    <div className="flex gap-8">
      <Scale icon="square-scaleX=0.5"/>
      <Scale icon="square-scaleY=1.2-scalex=0.5"/>
    </div>
  </div>

const Scale = ({ icon }) =>
  <div className="paper border pad-a-3">
    <div className="font-mono smaller mar-b-2">{icon}</div>
    <Icon name={icon} className="x4"/>
  </div>

export default Testing