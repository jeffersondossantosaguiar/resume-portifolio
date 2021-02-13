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
        <HomeH1>Virtual Banking Made Easy</HomeH1>
        <HomeP>
          Sign up for a new accoun today and receive $250 in credit towards your
          next payment.
        </HomeP>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home
