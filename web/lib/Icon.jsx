// This is a wrapper around the main Icon component used for examples in
// the web site.
import React    from 'react'
import RealIcon from '@/lib/components/Icon'
import Library  from './Library.jsx'

export const Icon = props =>
  <RealIcon library={Library} {...props}/>

export default Icon