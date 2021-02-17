import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import mp from '../../images/my-portifolio.jpg'

import { Container } from './styles'

const Portifolio = (): JSX.Element => {
  return (
    <Container id="portifolio">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={mp} alt="First slide" />
          <Carousel.Caption>
            <h3>My Portifolio</h3>
            <p>
              Feito em React mais Typescript, styled-componentes, react-scrool,
              bootstrap, react-bootstrap
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Em breve mais projetos...</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Portifolio
