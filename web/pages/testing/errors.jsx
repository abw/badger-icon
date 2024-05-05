import React from 'react'
import { useState } from 'react'
import { Icon } from '@/lib/index.js'

const Testing = () => {
  const [icon, setIcon] = useState('bars')
  return (
    <div>
      <h1>Error Handling</h1>
      <p>
        Do we get helpful error messages when something goes wrong?
        Click on one of the red buttons below to see for yourself.
      </p>
      <div className="flex start">
        <div className="flex column middle gap-1 surface-5 border shadow pad-4">
          <Icon name={icon} className="x3"/>
          <div className="smaller">{icon}</div>
        </div>
      </div>
      <div className="flex gap-2 mar-t-4">
        <button className="red" onClick={() => setIcon('none')}>none</button>
        <button className="red" onClick={() => setIcon('bars-wibbled')}>bars-wibbled</button>
        <button className="red" onClick={() => setIcon('bars-srto')}>bars-wibbled</button>
      </div>
    </div>
  )
}


export default Testing