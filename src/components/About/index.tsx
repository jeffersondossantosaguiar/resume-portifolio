import React from 'react'
import { Container } from './styles'

const About: React.FC = () => (
  <>
    <Container>
      <section id="about">
        <div className="row">
          <div className="columns">
            <h2>Hello, I am Jefferson </h2>
            <h3>A Mobile and Front-End Developer from Brazil</h3>
            <p>
              Em transição de carreira. Atualmente estou me dedicando às
              tecnologias JavaScript, TypeScript, NodeJS, React e ReactNative.
              Participei do bootcamp da Rocketseat onde pude colocar em prática
              conhecimentos adquiridos nas ferramentas ESLint, Prettier, Babel,
              Webpack.
            </p>
          </div>
          <div className="columns">
            <p>
              Criei uma API REST com NodeJS usando melhores práticas como os
              principios SOLID, DRY além de realizar testes unitários,
              autenticação JWT e utilizar os bancos de dados Postgres, REDIS e
              MongoDB junto com o Docker e por fim realizar o deplay com fluxo
              CI/CD com o Github actions. Foi criado uma aplicação React para
              consumir a API com isolamento de componentes, uso de estados, TDD
              e bibliotecas como o Date-FNS. Também tive a opurtunidade de criar
              um app ReactNative com todas as skills citadas acima
              reaproveitando o código.
            </p>
          </div>
        </div>
        <div className="skills">
          <h2>My Skills</h2>
        </div>
      </section>
    </Container>
  </>
)

export default About
