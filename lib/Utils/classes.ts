import { hasValue, isObject } from '@abw/badger-utils'

export type ClassesItem = string | object | null | undefined | Array<ClassesItem>
export type ClassesItems = ClassesItem[]

export const joinClasses = (classes: Array<string|null>)  =>
  classes
    .filter(hasValue)
    .join(' ')

export const setKeys = (props: object) =>
  Object.entries(props)
    .filter( ([ , value]) => value )
    .map( ([key]) => key )


export const classes = (...inputs: ClassesItems) => joinClasses(
  inputs.flatMap(
    input =>
      isObject(input)
        ? setKeys(input as object)
        : input as string | null
  )
)