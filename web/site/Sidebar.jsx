import React from 'react'
import Menu from './Menu.jsx'
import { ComponentsMenu, GettingStartedMenu } from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...GettingStartedMenu}/>
    <Menu {...ComponentsMenu}/>
  </>

export default Sidebar