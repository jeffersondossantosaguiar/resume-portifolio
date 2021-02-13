import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

import {
  Container,
  Wrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconsLink,
  SocialLogo,
  WebsiteRights,
} from './styles'

const Contact = (): JSX.Element => {
  return (
    <Container>
      <Wrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">my portifolio</SocialLogo>
            <WebsiteRights>
              jefferson © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrap>
    </Container>
  )
}

export default Contact
