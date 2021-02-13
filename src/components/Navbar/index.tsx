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

interface Props {
  toggle: () => void
}

const Navbar = ({ toggle }: Props): JSX.Element => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">My Portifolio</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="education">Education</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portifolio">Portifolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
