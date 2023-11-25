import React from 'react'
import Menu from './Menu.jsx'
import {
  GettingStartedMenu, IconMenu, ModifiersMenu, LibraryMenu, PrimitivesMenu
} from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...GettingStartedMenu}/>
    <Menu {...IconMenu}/>
    <Menu {...ModifiersMenu}/>
    <Menu {...PrimitivesMenu}/>
    <Menu {...LibraryMenu}/>
  </>

export default Sidebar