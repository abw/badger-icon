import React from 'react'
import Menu from './Menu.jsx'
import {
  GettingStartedMenu, IconMenu, ModifiersMenu, LibraryMenu, PrimitivesMenu,
  TestingMenu
} from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...GettingStartedMenu}/>
    <Menu {...IconMenu}/>
    <Menu {...ModifiersMenu}/>
    <Menu {...PrimitivesMenu}/>
    <Menu {...LibraryMenu}/>
    { Boolean(import.meta.env.DEV) &&
      <Menu {...TestingMenu}/>
    }
  </>

export default Sidebar