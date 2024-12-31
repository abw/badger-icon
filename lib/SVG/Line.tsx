import { reactProps } from '../utils/reactify'
import { PropsObject } from '../types'

export const Line = (props: PropsObject) =>
  <line  {...reactProps(props) as React.SVGProps<SVGLineElement>}/>