import React from 'react'
import { Icon } from '../../lib/Icon.jsx'

const Examples = () =>
  <div className="debug-icons">
    {/* <Icon name="fa-check" className="fa-4x"/> */}
    <IconWeights name="point-up"/>
    <IconWeights name="point-right.fill"/>
    <IconWeights name="point-down.fill.opacity=50%"/>
    <IconWeights name="point-left.fill.color=#ff7f00"/>
    <IconWeights name="point-up-down"/>
    <IconWeights name="point-left-right"/>
    <IconWeights name="check"/>
    <IconWeights name="check.square"/>
    <IconWeights name="cross"/>
    <IconWeights name="cross.square"/>
    <IconWeights name="circle"/>
    <IconWeights name="circle.fill"/>
    <IconWeights name="square"/>
    <IconWeights name="square.fill"/>
    <IconWeights name="square.square"/>
    <IconWeights name="square.square.fill=red"/>
    <IconWeights name="square10.fill=orange"/>
    <IconWeights name="square20.fill=yellow"/>
    <IconWeights name="square30.fill=#4f4"/>
    {/* <IconWeights name="square40.fill=hsl(190,100%,60%)"/> */}
    <IconWeights name="arrow-left"/>
    <IconWeights name="arrow-right"/>
    <IconWeights name="arrow-up"/>
    <IconWeights name="arrow-down"/>
    <IconWeights name="arrow-left.square"/>
    <IconWeights name="arrow-right.square"/>
    <IconWeights name="arrow-up.square"/>
    <IconWeights name="arrow-down.square"/>
    <IconWeights name="arrow-up-down"/>
    <IconWeights name="arrow-left-right"/>
    <IconWeights name="arrow-up-down.square"/>
    <IconWeights name="arrow-left-right.square"/>
    <IconWeights name="angle-left"/>
    <IconWeights name="angle-right"/>
    <IconWeights name="angle-up"/>
    <IconWeights name="angle-down"/>
    <IconWeights name="angle-left.square"/>
    <IconWeights name="angle-right.square"/>
    <IconWeights name="angle-up.square"/>
    <IconWeights name="angle-down.square"/>
    <IconWeights name="angles-left"/>
    <IconWeights name="angles-right"/>
    <IconWeights name="angles-up"/>
    <IconWeights name="angles-down"/>
    <IconWeights name="angles-left.square"/>
    <IconWeights name="angles-right.square"/>
    <IconWeights name="angles-up.square"/>
    <IconWeights name="angles-down.square"/>
    <IconWeights name="caret-left"/>
    <IconWeights name="caret-right"/>
    <IconWeights name="caret-up"/>
    <IconWeights name="caret-down"/>
    <IconWeights name="caret-left.fill"/>
    <IconWeights name="caret-right.fill"/>
    <IconWeights name="caret-up.fill"/>
    <IconWeights name="caret-down.fill"/>
    <p className="blue">
      {/* <Icon name="check"/> Some text */}
    </p>
    <p>
      {/* <Icon name="cross"/> Some text */}
    </p>
  </div>

const IconWeights = ({name, size='fa-4x'}) =>
  <div>
    <h4>{name}</h4>
    <Icon name={`${name}.thinner`} className={size}/>
    <Icon name={`${name}.thin`}    className={size}/>
    <Icon name={`${name}.light`}   className={size}/>
    <Icon name={`${name}.medium`}  className={size}/>
    <Icon name={`${name}.heavy`}   className={size}/>
    <Icon name={`${name}.thick`}   className={size}/>
    <Icon name={`${name}.thicker`} className={size}/>
  </div>

export default Examples