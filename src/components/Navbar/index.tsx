import React from 'react'
import { FaBars } from 'react-icons/fa'

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './styles'

const Navbar = (): JSX.Element => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">My Portifolio</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
