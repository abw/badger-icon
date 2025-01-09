import Body from './Body'
import { reactProps } from '../utils/reactify'
import { BodyProp, PropsObject } from '../types'

export const Array = (props: PropsObject) => {
  const { items, ...rest }: { items?: BodyProp, [key: string]: unknown } = props
  return (
    <g  {...reactProps(rest) as React.SVGProps<SVGGElement>}>
      { (items as BodyProp[]).map(
        (b: BodyProp, n: number) => <Body key={n} body={b}/>
      )}
    </g>
  )
}
