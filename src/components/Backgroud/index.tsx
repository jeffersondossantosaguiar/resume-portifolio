import React from 'react'
import Video from '../../videos/video.mp4'

import { HeroContainer, HeroBg, VideoBg } from './styles'

const Backgroud = (): JSX.Element => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} />
      </HeroBg>
    </HeroContainer>
  )
}

export default Backgroud
