import { Circle   } from './Circle'
import { Ellipse  } from './Ellipse'
import { Line     } from './Line'
import { Path     } from './Path'
import { Polygon  } from './Polygon'
import { Polyline } from './Polyline'
import { Rect     } from './Rect'
import { SVG      } from './SVG'
import { Array    } from './Array'
import { fail, isArray, isObject, isString } from '@abw/badger-utils'
import { BodyObject, BodyProp, PropsObject, SVGElement } from '../types'

const elements: { [key: string]: SVGElement } = {
  array:    Array,
  circle:   Circle,
  ellipse:  Ellipse,
  line:     Line,
  path:     Path,
  polygon:  Polygon,
  polyline: Polyline,
  rect:     Rect,
  svg:      SVG,
}

export const Body = (props: PropsObject) => {
  const { path, body }: {
    path?: string,
    body?: BodyProp
  } = props

  if (path) {
    return <Path d={path} {...props}/>
  }

  if (isString(body)) {
    return <g dangerouslySetInnerHTML={{ __html: body as string }}/>
  }
  if (isObject(body)) {
    const { element, ...rest } = body as BodyObject
    const Element = elements[element]
      || fail(`Invalid element type: ${element} => `, JSON.stringify(body))
    return <Element {...rest}/>
  }
  if (isArray(body)) {
    return (body as BodyProp[]).map(
      (b, n) => <Body key={n} body={b}/>
    )
  }
  fail(`Don't know how to handle body: ${body}`)
}

export default Body

