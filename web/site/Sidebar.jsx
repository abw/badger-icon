import React from 'react'
import Menu from './Menu.jsx'
import { GettingStartedMenu, IconsMenu } from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...GettingStartedMenu}/>
    <Menu {...IconsMenu}/>
  </>

export default Sidebar