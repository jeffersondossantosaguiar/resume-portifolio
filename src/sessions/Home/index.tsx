import React from 'react'
import Particles from 'react-particles-js'
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
        {/* <VideoBg autoPlay loop muted src={Video} /> */}
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
