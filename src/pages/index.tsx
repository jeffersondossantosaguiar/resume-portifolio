import React, { useState } from 'react'
import Particles from 'react-particles-js'

import { SiJavascript, SiHtml5, SiCss3, SiReact } from 'react-icons/si'
import Carousel from 'react-bootstrap/Carousel'
import { animateScroll as scroll } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import eu from '../images/me.jpeg'
import mp from '../images/my-portifolio.jpg'

import {
  Container,
  HomeContainer,
  HomeBg,
  HomeContent,
  HomeH1,
  HomeP,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  Line,
  Wrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconsLink,
  SocialLogo,
  WebsiteRights,
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
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeContainer id="home">
        <HomeBg>
          <Particles
            height="100vh"
            params={{
              particles: {
                number: {
                  value: 40,
                },
                size: {
                  value: 2,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'repulse',
                  },
                },
              },
            }}
          />
        </HomeBg>
        <HomeContent>
          <HomeH1>
            Hey! I&apos;m <strong>Jefferson</strong>
          </HomeH1>
          <HomeP>A mobile and front-end Developer</HomeP>
        </HomeContent>
      </HomeContainer>
      <InfoContainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>About</TopLine>
                <Heading>Um pouquinho sobre mim...</Heading>
                <Subtitle>
                  Apaixonado por Tecnologia, Games e Cultura POP. Atualmente
                  cursando Ciência da Computação (Univercidade Anhembi Morumbi),
                  trabalho há mais de 10 anos com suporte a usuários e a
                  infraestrutura de redes. Estou em transição de carreira onde
                  me dedico ao desenvolvimento frontend e mobile, focando em
                  Javascript, React, ReactNative e NodeJs mas estou aberto a
                  outras linguagens. Adoro aprender, trabalhar em equipe e poder
                  dar minha contribuição para resolução de desafios.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={eu} alt="me" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer id="skills">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Skills</TopLine>
                <Heading>Languages and framework that i speak:</Heading>
                {/* <Subtitle>
                  Apaixonado por Tecnologia, Games e Cultura POP. Trabalho há
                  mais de 10 anos com suporte a usuários e a infraestrutura de
                  redes. Estou em transição de carreira onde me dedico ao
                  desenvolvimento frontend e mobile, focando em Javascript,
                  React, ReactNative e NodeJs mas estou aberto a outras
                  linguagens. Adoro aprender, trabalhar em equipe e poder dar
                  minha contribuição para resolução de desafios.
                </Subtitle> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <Line>
                <SiJavascript color="#EFD81D" size="100" />
                <SiHtml5 color="#DD4B25" size="100" />
              </Line>
              <Line>
                <SiCss3 color="#1B73B7" size="100" />
                <SiReact color="#5DD2F3" size="100" />
              </Line>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <Container id="portifolio">
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
      </Container>
      <Container id="contact">
        <Wrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                my portifolio
              </SocialLogo>
              <WebsiteRights>
                jefferson © {new Date().getFullYear()} All rights reserved
              </WebsiteRights>
              <SocialIcons>
                {/* <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconsLink> */}
                <SocialIconsLink
                  href="https://www.linkedin.com/in/jeffersonsantosaguiar/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconsLink>
                <SocialIconsLink
                  href="https://github.com/jeffersondossantosaguiar"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconsLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </Wrap>
      </Container>
    </>
  )
}

export default LandingPage
