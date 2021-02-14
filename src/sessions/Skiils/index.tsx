import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-1.svg'

import {
  Container,
  Title,
  PorfifolioWrapper,
  Card,
  Icon,
  Subtitle,
  Text,
} from './styles'

const Skills = (): JSX.Element => {
  return (
    <Container id="skills">
      <Title>
        <PorfifolioWrapper>
          <Card>
            <Icon src={Icon1} />
            <Subtitle>Reduce expenses</Subtitle>
            <Text>
              We help recuce your fess and increase your overall revenue.
            </Text>
          </Card>
          <Card>
            <Icon src={Icon2} />
            <Subtitle>Virtual Ofice</Subtitle>
            <Text>
              We help recuce your fess and increase your overall revenue.
            </Text>
          </Card>
          <Card>
            <Icon src={Icon3} />
            <Subtitle>Premium Benefits</Subtitle>
            <Text>
              We help recuce your fess and increase your overall revenue.
            </Text>
          </Card>
        </PorfifolioWrapper>
      </Title>
    </Container>
  )
}

export default Skills
