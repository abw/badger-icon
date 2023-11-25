// This is a wrapper around the main Icon component used for examples in
// the web site.
import React    from 'react'
import RealIcon from '@/lib/components/Icon.jsx'
import IconData from './IconData.jsx'

export const Icon = props =>
  <RealIcon icons={IconData} {...props}/>

export default Icon