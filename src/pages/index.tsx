import React, { useState } from 'react'
import Particles from 'react-particles-js'
import Tilt from 'react-parallax-tilt'

import { SiJavascript, SiHtml5, SiCss3, SiReact } from 'react-icons/si'
import Carousel from 'react-bootstrap/Carousel'
import { animateScroll as scroll } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import eu from '../images/me.jpeg'
import mp from '../images/my-portifolio.jpg'
import img from '../images/svg-1.svg'

import {
  Container,
  Container2,
  Contact,
  Home,
  About,
  Skills,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Text,
  Column2,
  ImgWrap,
  Img,
  SocialLogo,
} from './styles'

const LandingPage = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 40,
            },
            size: {
              value: 2,
            },
          },
        }}
      />
      <Home id="home">
        <div className="content">
          <h1>
            Hey! I&apos;m <strong>Jefferson</strong>
          </h1>
          <p>A mobile and front-end Developer</p>
        </div>
        <div className="home-image">
          <img src={img} alt="imagem dev" />
        </div>
      </Home>
      <About id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>About</TopLine>
                <Heading>Um pouquinho sobre mim...</Heading>
                <Text>
                  Apaixonado por Tecnologia, Games e Cultura POP. Atualmente
                  cursando Ciência da Computação (Univercidade Anhembi Morumbi),
                  trabalho há mais de 10 anos com suporte a usuários e a
                  infraestrutura de redes. Estou em transição de carreira onde
                  me dedico ao desenvolvimento frontend e mobile, focando em
                  Javascript, React, ReactNative e NodeJs mas estou aberto a
                  outras linguagens. Adoro aprender, trabalhar em equipe e poder
                  dar minha contribuição para resolução de desafios.
                </Text>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={eu} alt="me" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </About>
      <Skills id="skills">
        <div className="title">
          <h1>Skills</h1>
          <p>Languages and framework that I speak:</p>
        </div>
        <div className="cards-container">
          <Tilt>
            <div className="card">
              <div className="content">
                <h2>JS</h2>

                <SiJavascript size="200px" color="#E9D44C" />
                {/* <h3>Card One</h3> */}
                {/* <p>
                  lorem ipsum dolor sit amet, consectetur adipis ac turpis eu
                  non pro id el component e.
                </p> */}
                <a href="/">Javascript</a>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="card">
              <div className="content">
                <h2>JSX</h2>
                <SiReact size="200px" color="#61DBFB" />
                {/* <h3>Card Two</h3>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipis ac turpis eu
                  non pro id el component e.
                </p> */}
                <a href="/">React</a>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="card">
              <div className="content">
                <h2>HTML</h2>
                <SiHtml5 size="200px" color="#DC4D25" />
                {/* <h3>Card Three</h3>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipis ac turpis eu
                  non pro id el component e.
                </p> */}
                <a href="/">HTML</a>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="card">
              <div className="content">
                <h2>CSS</h2>
                <SiCss3 size="200px" color="#1A6FB4" />
                {/* <h3>Card Four</h3>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipis ac turpis eu
                  non pro id el component e.
                </p> */}
                <a href="/">CSS</a>
              </div>
            </div>
          </Tilt>
        </div>
      </Skills>
      <Container2 id="portifolio">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={mp} alt="First slide" />
            <Carousel.Caption>
              <h3>My Portifolio</h3>
              <p>
                Feito em React mais Typescript, styled-componentes,
                react-scrool, bootstrap, react-bootstrap
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
      </Container2>
      <Contact id="contact">
        <div className="content">
          <div className="social-media-wrap">
            <SocialLogo to="/" onClick={toggleHome}>
              My Portifolio
            </SocialLogo>
            <small className="web-site-rights">
              jefferson © {new Date().getFullYear()} All rights reserved
            </small>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/jeffersonsantosaguiar/"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/jeffersondossantosaguiar"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </Contact>
    </Container>
  )
}

export default LandingPage
