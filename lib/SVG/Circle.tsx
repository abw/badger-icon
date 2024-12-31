import { reactProps } from '../utils/reactify'
import { PropsObject } from '../types'

export const Circle = (props: PropsObject) =>
  <circle {...reactProps(props) as React.SVGProps<SVGCircleElement>}/>
