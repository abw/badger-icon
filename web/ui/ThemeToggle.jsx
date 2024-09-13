import React from 'react'
import { useSite } from '@abw/badger-website'

export const SetLight = ({ text='light' }) => {
  const { setLight } = useSite()
  return (
    <span className="hover" onClick={setLight}>{text}</span>
  )
}

export const SetDark = ({ text='dark' }) => {
  const { setDark } = useSite()
  return (
    <span className="hover" onClick={setDark}>{text}</span>
  )
}
