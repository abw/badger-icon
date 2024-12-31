import { reactProps } from '../utils/reactify'
import { PropsObject } from '../types'

export const Path = (props: PropsObject) =>
  <path  {...reactProps(props) as React.SVGProps<SVGPathElement>}/>
