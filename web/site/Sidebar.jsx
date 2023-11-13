import React from 'react'
import Menu from './Menu.jsx'
import { GettingStartedMenu, IconMenu, ModifiersMenu } from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...GettingStartedMenu}/>
    <Menu {...IconMenu}/>
    <Menu {...ModifiersMenu}/>
  </>

export default Sidebar