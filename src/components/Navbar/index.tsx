import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { IconContext } from 'react-icons/lib'
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
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              My Portifolio
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth duration={500} spy offset={-80}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="skills" smooth duration={500} spy offset={-80}>
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="portifolio"
                  smooth
                  duration={500}
                  spy
                  offset={-80}
                >
                  Portifolio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact" smooth duration={500} spy offset={-80}>
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
