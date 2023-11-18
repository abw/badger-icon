import React from 'react'
import Menu from './Menu.jsx'
import {
  GettingStartedMenu, IconMenu, ModifiersMenu, IconDataMenu
} from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...GettingStartedMenu}/>
    <Menu {...IconMenu}/>
    <Menu {...ModifiersMenu}/>
    <Menu {...IconDataMenu}/>
  </>

export default Sidebar