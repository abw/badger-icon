import { MouseEventHandler } from 'react'

export type Nothing = undefined | null
export type PropsObject = {
  [key: string]: unknown
}
export type StringPropsObject = {
  [key: string]: string
}

export type IconSource = string | PropsObject | IconSource[]

export type IconSources = {
  [key: string]: IconSource
}

export type IconDefaults = {
  width:  number,
  height: number,
  type?:  string
}

export type IconLibrary = {
  defaults: IconDefaults,
  icons: IconSources
}

export type ExpandedPath = {
  path: string,
  type?: string
}

export type SplitIconName = {
  dashes: string[],
  classes: string[],
  style: StyleProps,
}

export type ResolvedIcon = [name: string, dashes: string[], IconSource]

export type IconSpec = SplitIconName & {
  name?: string,
}

export type IconBody = PropsObject
export type IconStyle = StyleProps | string

export type IconProps = IconDefaults & {
  name?: string,
  body?: IconBody
  style?: IconStyle,
  transform?: TransformObject,
  className?: string
}

export type TransformObject = {
  x: number,
  y: number,
  size: number,
  scaleX: number,
  scaleY: number,
  flipX: boolean,
  flipY: boolean,
  rotate: number
}

// Go directly to Typescript jail.  Do not pass Go.  Do not collect £200.
// Not that you were going to anyway, because this is free software and
// no-one is going to pay you for the time it takes you to properly type
// these functions that no-one else is ever going to use.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TransformFunction = (transform: TransformObject, ...args: any[]) => void

export type TransformFunctions = {
  [key: string]: TransformFunction
}

export type StyleProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
//  fill?: string,
//  stroke?: string,
//  opacity?: string,
//  fillOpacity?: string,
//  strokeOpacity?: string,
//  strokeWidth?: string,
//  strokeLinecap?: string,
//  strokeLinejoin?: string,
//  strokeMiterlimit?: string,
//  strokeDasharray?: string | number[]
}

export type StylePropsTable = {
  [key: string]: StyleProps
}

// Yeah, sorry Typescript but I really don't give a shit about these params
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StyleFunction = (style: StyleProps, ...args: any[]) => void
export type StyleFunctions = {
  [key: string]: StyleFunction
}

export type BodyGenerator = (arg: string) => IconBody
export type BodyGenerators = {
  [key: string] : BodyGenerator
}

export type SVGElement = (props: PropsObject) => JSX.Element
export type SVGIconProps = {
  onClick?: MouseEventHandler<SVGSVGElement>,
  minx?: number,
  miny?: number,
  width: number,
  height: number,
  style: IconStyle,
  transform: TransformObject,
  className: string,
  [key: string]: unknown
}


export type BodyProp = string | BodyObject | BodyProp[]
export type BodyObject =  {
  element: string,
  transform?: TransformObject,
  [key: string]: unknown
}

export type IconsProps = {
  names: string | string[],
  className?: string
}
