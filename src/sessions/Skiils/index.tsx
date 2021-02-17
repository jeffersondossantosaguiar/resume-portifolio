import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiReact } from 'react-icons/si'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Line,
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
    </>
  )
}

export default Skills
