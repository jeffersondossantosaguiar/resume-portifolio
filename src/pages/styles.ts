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

  @media screen and (max-width: 1250px) {
    .home-image {
      display: none;
    }
  }

  .content {
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
      position: absolute;
    }
  }

  .content h1 {
    text-align: center;
    font-size: 60px;
    font-weight: 100;

    strong {
      font-weight: 500;
    }

    @media screen and (max-width: 768px) {
      font-size: 48px;
    }

    @media screen and (max-width: 480px) {
      font-size: 34px;
    }
  }

  .content p {
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    max-width: 600px;
    text-transform: uppercase;
    letter-spacing: 3.6px;

    @media screen and (max-width: 768px) {
      font-size: 16.5px;
    }

    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
  }

  .home-image img {
    max-height: 250px;
  }
`

export const About = styled.div``
export const Skills = styled.div`
  height: auto;
  display: flex; /* establish flex container */
  flex-direction: column; /* make main-axis vertical */
  justify-content: center; /* align items vertically, in this case */
  align-items: center;

  .title {
    padding-top: 100px;
    width: 80%;
    max-width: 1300px;

    h1 {
      color: #01bf71;
      font-size: 36px;
      font-weight: 700;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 24px;
      font-size: 48px;
      line-height: 1.1;
      font-weight: 600;

      @media screen and (max-width: 480px) {
        font-size: 32px;
      }
    }
  }

  .cards-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 480px) {
      height: auto;
    }

    .card {
      position: relative;
      width: 280px;
      height: 400px;
      margin: 30px;
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(5px);

      .content {
        padding: 20px;
        text-align: center;
        transition: 0.5s;
      }

      .content h2 {
        position: absolute;
        top: -10px;
        right: 30px;
        font-size: 5em;
        color: rgba(255, 255, 255, 0.05);
        pointer-events: none;
      }
      .content h3 {
        font-size: 1.8em;
        color: #fff;
        z-index: 1;
      }
      .content img {
        width: 100px;
      }
      .content p {
        font-size: 1em;
        color: #fff;
        font-weight: 300;
      }
      .content a {
        position: relative;
        display: inline-block;
        padding: 8px 20px;
        margin-top: 15px;
        background: #fff;
        color: #000;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
    }
  }
`
export const InfoWrapper = styled.div`
  display: grid;
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
  height: 150px;
`
export const Contact = styled.div`
  height: 100vh;
  display: flex;

  .content {
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    margin: 0 auto;

    .social-media-wrap {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      max-width: 1100px;
      margin: 40px auto 0 auto;
    }

    .web-site-rights {
      margin-bottom: 16px;
    }

    .social-icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 240px;
      font-size: 50px;
    }

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
      }
    }
  }
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
export const SocialLogo = styled(LinkR)`
  justify-self: start;
  cursor: pointer;
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover {
    color: #01bf71;
    text-decoration: none;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
