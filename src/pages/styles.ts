import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Container = styled.div`
  background: #100f17;
  color: #fff;
  .particles {
    background: #100f17;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`
export const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`
export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HomeH1 = styled.h1`
  text-align: center;
  font-size: 60px;
  font-weight: 300;

  strong {
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 480px) {
    font-size: 34px;
  }
`
export const HomeP = styled.p`
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  max-width: 600px;
  text-transform: uppercase;
  letter-spacing: 2.8px;

  @media screen and (max-width: 768px) {
    font-size: 16.5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`
export const About = styled.div`
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Text = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  text-align: center;
`
export const Img = styled.img`
  width: 70%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 50%;
`
export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: solid 1px blue; */
  height: 150px;
`
export const Container2 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .carousel {
    height: 70%;
    width: 70%;
    background-color: #000;
  }
  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 50vh;
    .carousel {
      height: 80%;
      width: 100%;
    }
  }
`
export const Wrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const SocialLogo = styled(LinkR)`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover {
    color: #01bf71;
    text-decoration: none;
    transition: 0.3s ease-out;
  }
`
export const WebsiteRights = styled.small`
  margin-bottom: 16px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`
export const SocialIconsLink = styled.a`
  font-size: 24px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`
