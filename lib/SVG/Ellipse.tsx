import { reactProps } from '../utils/reactify'
import { PropsObject } from '../types'

export const Ellipse = (props: PropsObject) =>
  <ellipse  {...reactProps(props) as React.SVGProps<SVGEllipseElement>}/>

