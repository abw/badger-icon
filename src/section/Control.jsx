import React from 'react'
import { Icon } from '../../lib/Icon.jsx'
import { useState } from 'react'

const icons = [
  'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up',
  'arrow-up-down', 'arrow-left-right',
  'angle-down', 'angle-left', 'angle-right', 'angle-up',
  'angles-down', 'angles-left', 'angles-right', 'angles-up',
  'caret-down', 'caret-left', 'caret-right', 'caret-up',
  'check', 'circle', 'cross',
  'square', 'square10', 'square20', 'square30', 'square40'
]
const shapes = [
  'round', 'square'
]
const weights = [
  'thinner', 'thin', 'light', 'medium', 'heavy', 'thick', 'thicker'
]
const fills = [
  'line', 'fill'
]


const Control = () => {
  const [icon, setIcon] = useState('check')
  const [shape, setShape] = useState('round')
  const [weight, setWeight] = useState('medium')
  const [fill, setFill] = useState('line')
  return (
    <div className="flex">
      <div className="debug-icons">
        <Icon name={`${icon}.${shape}.${weight}.${fill}`} className="fa-10x"/>
      </div>
      <form>
        <Selection label="Icon"  options={icons} value={icon} set={setIcon}/>
        <Selection label="Shape" options={shapes} value={shape} set={setShape}/>
        <Selection label="Weight" options={weights} value={weight} set={setWeight}/>
        <Selection label="Fill" options={fills} value={fill} set={setFill}/>
      </form>
    </div>
  )
}

const Selection = ({label, options, value, set}) =>
  <div className="selection">
    <label>{label}</label>
    <select value={value} onChange={e => set(e.target.value)}>
      { options.map(
        option => <option key={option} value={option}>{option}</option>
      )}
    </select>
  </div>

export default Control