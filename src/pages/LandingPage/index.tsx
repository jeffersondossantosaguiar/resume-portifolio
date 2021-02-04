import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { Container, Home, About } from './styles'

const LandingPage: React.FC = () => (
  <Container>
    <Home>
      <h1>
        Hey! I’m <strong>Jefferson</strong>
      </h1>
      <h2>A MOBILE AND FRONT-END DEVELOPER</h2>
      <a href="/">
        <FiChevronDown />
      </a>
    </Home>
    <About>
      <h1>teste1</h1>
    </About>
  </Container>
)

export default LandingPage
