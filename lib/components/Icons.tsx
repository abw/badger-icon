import Icon from './Icon'
import { splitSpace } from '../utils/functions'
import { IconsProps } from '../types'

export const Icons = ({
  names,
  className
}: IconsProps) =>
  <div className={`grid overlap ${className}`}>
    { splitSpace(names as string)
      .map(
        name => <Icon name={name} key={name}/>
      )
    }
  </div>

export default Icons