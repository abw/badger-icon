import React from 'react'
import { transformData } from './utils/transform.js'

export default function Transform({
  width,
  height,
  transform,
  children
}) {
  const halfw = width / 2
  const halfh = height / 2
  // const trans = isString(transform) ? transformData(transform) : transform
  const trans = transformData(transform)
  const tx    = trans.x * width  / 16
  const ty    = trans.y * height / 16
  const sx    = trans.size / 16 * (trans.flipX ? -1 : 1)
  const sy    = trans.size / 16 * (trans.flipY ? -1 : 1)
  const rt    = trans.rotate
  console.log(`transform:`, transform)
  console.log(`tx:${tx} ty:${ty} sx:${sx} sy:${sy} rt:${rt}`)

  return (
    <g transform={`translate(${halfw} ${halfh})`}>
      <g transform={`translate(${tx}, ${ty}) scale(${sx}, ${sy}) rotate(${rt} 0 0)`}>
        <g transform={`translate(-${halfw} -${halfh})`}>
          {children}
        </g>
      </g>
    </g>
  )
}

