import React from 'react'
import { Circle   } from './Circle.jsx'
import { Ellipse  } from './Ellipse.jsx'
import { Line     } from './Line.jsx'
import { Path     } from './Path.jsx'
import { Polygon  } from './Polygon.jsx'
import { Polyline } from './Polyline.jsx'
import { Rect     } from './Rect.jsx'
import { fail, isArray, isObject, isString } from '@abw/badger-utils'
import { SVG } from './SVG.jsx'
import { Array } from './Array.jsx'

const elements = {
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

export const Body = ({
  path,
  body,
  ...props
}) => {
  if (path) {
    console.log(`rendering path: `, path)
    return <Path d={path} {...props}/>
  }
  // console.log(`rendering body: `, body)

  if (isString(body)) {
    console.log(`SVG string`)
    return <g dangerouslySetInnerHTML={{ __html: body }}/>
  }
  if (isObject(body)) {
    console.log(`an object: `, body)
    const { element, ...rest } = body
    const Element = elements[element]
      || fail(`Invalid element type: ${element} => `, JSON.stringify(body))
    return <Element {...rest}/>
  }
  if (isArray(body)) {
    return body.map(
      (b, n) => <Body key={n} body={b}/>
    )
  }
  fail(`Don't know how to handle body: ${body}`)
}

export default Body
