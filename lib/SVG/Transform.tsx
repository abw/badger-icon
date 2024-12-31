import { ReactNode } from 'react'
import { TransformObject } from '../types'

export default function Transform({
  width,
  height,
  transform,
  children
}: {
  width: number,
  height: number,
  transform: TransformObject,
  children: ReactNode
}) {
  const halfw = width / 2
  const halfh = height / 2
  const tx    = transform.x * width  / 16
  const ty    = transform.y * height / 16
  const sx    = transform.size / 16 * (transform.flipX ? -1 : 1) * transform.scaleX
  const sy    = transform.size / 16 * (transform.flipY ? -1 : 1) * transform.scaleY
  const rt    = transform.rotate
  // console.log(`transform:`, transform)
  // console.log(`tx:${tx} ty:${ty} sx:${sx} sy:${sy} rt:${rt}`)

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
