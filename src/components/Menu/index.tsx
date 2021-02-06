import React from 'react'
import { Container } from './styles'

const Menu: React.FC = () => (
  <Container>
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
          <a className="smoothscroll" href="#education">
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
  </Container>
)

export default Menu
