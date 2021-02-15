import React from 'react'
import img from '../../images/svg-1.svg'

import {
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
} from './styles'

const Skills = (): JSX.Element => {
  return (
    <>
      <InfoContainer id="skills">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Skills</TopLine>
                <Heading>Um pouquinho sobre mim...</Heading>
                <Subtitle>
                  Apaixonado por Tecnologia, Games e Cultura POP. Trabalho há
                  mais de 10 anos com suporte a usuários e a infraestrutura de
                  redes. Estou em transição de carreira onde me dedico ao
                  desenvolvimento frontend e mobile, focando em Javascript,
                  React, ReactNative e NodeJs mas estou aberto a outras
                  linguagens. Adoro aprender, trabalhar em equipe e poder dar
                  minha contribuição para resolução de desafios.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt="skills" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Skills
