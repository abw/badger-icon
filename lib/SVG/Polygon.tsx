import { reactProps } from '../utils/reactify'
import { PropsObject } from '../types'

export const Polygon = (props: PropsObject) =>
  <polygon  {...reactProps(props) as React.SVGProps<SVGPolygonElement>}/>
