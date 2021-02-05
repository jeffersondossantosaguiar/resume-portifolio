import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Container } from './styles'

const Header: React.FC = () => (
  <Container>
    <header id="home">
      <div className="row banner">
        <div className="banner-text">
          <h1>
            Hey! I’m <strong>Jefferson</strong>
          </h1>
          <h3>A MOBILE AND FRONT-END DEVELOPER</h3>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <FiChevronDown />
        </a>
      </p>
    </header>
  </Container>
)

export default Header
