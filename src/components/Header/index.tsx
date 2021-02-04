import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Container } from './styles'

const Header: React.FC = () => (
  <Container>
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portifolio">
              Portifolio
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#Education">
              Education
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

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
