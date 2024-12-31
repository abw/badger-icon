import { reactProps } from '../utils/reactify'
import { PropsObject } from '../types'

export const Rect = (props: PropsObject) =>
  <rect  {...reactProps(props) as React.SVGProps<SVGRectElement>}/>
