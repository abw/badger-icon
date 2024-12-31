import { reactProps } from '../utils/reactify'
import { PropsObject } from '../types'

export const Polyline = (props: PropsObject) =>
  <polyline  {...reactProps(props) as React.SVGProps<SVGPolylineElement>}/>
