import { hasValue, isObject } from '@abw/badger-utils'

export const joinClasses = classes =>
  classes
    .filter(hasValue)
    .join(' ')

export const setKeys = props =>
  Object.entries(props)
    .filter( ([ , value]) => value )
    .map( ([key]) => key )

export const classes = (...inputs) => joinClasses(
  inputs.flatMap(
    input =>
      isObject(input)
        ? setKeys(input)
        : input
  )
)
