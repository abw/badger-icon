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
  type:   string
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

export type IconProps = IconDefaults & {
  body?: IconBody
  style?: StyleProps,
  transform?: TransformObject,
}
/*
export type SplitIconName = {
  name?: string
  dashes?: string[],
  classes?: string[],
  style?: StyleProps,
}
*/



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

export type TransformFunction = (transform: TransformObject, ...args: any[]) => void

export type TransformFunctions = {
  [key: string]: TransformFunction
}

export type StyleProps = {
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

export type StyleFunction = (style: StyleProps, ...args: any[]) => void
export type StyleFunctions = {
  [key: string]: StyleFunction
}

export type BodyGenerator = (arg: string) => PropsObject
export type BodyGenerators = {
  [key: string] : BodyGenerator
}