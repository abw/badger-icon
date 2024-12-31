import { reactProps } from '../utils/reactify'
import { PropsObject } from '../types'

export const SVG = (props: PropsObject) => {
  const { svg, ...rest }: { svg?: string, [key: string]: unknown } = props
  return (
    <g
      dangerouslySetInnerHTML={{ __html: svg as string }}
      {...reactProps(rest) as React.SVGProps<SVGGElement>}
    />
  )
}
