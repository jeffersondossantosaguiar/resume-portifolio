import React from 'react'
import { Container } from './styles'

const Menu: React.FC = () => (
  <Container>
    <nav>
      <div className="logo">My Portifolio</div>

      <ul className="nav-links">
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
