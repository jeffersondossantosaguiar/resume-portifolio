import React from 'react'
import Video from '../../videos/video.mp4'

import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
} from './styles'

const Home = (): JSX.Element => {
  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} />
      </HomeBg>
      <HomeContent>
        <HomeH1>
          Hey! I&apos;m <strong>Jefferson</strong>
        </HomeH1>
        <HomeP>A mobile and front-end Developer</HomeP>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home
