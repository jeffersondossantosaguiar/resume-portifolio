import styled from 'styled-components'

export const Container = styled.div``

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  color: #fff;
  height: 100vh;
  min-height: 100vh;

  h1 {
    font-size: 72px;
    font-weight: 300;
    margin-left: 20%;

    strong {
      font-weight: 500;
    }
  }

  h2 {
    margin-top: 12px;
    font-size: 14px;
    font-weight: 300;
    margin-left: 20%;

    letter-spacing: 0.75em;
  }

  a {
    position: absolute;
    padding-top: 500px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    text-decoration: none;
    transition: background-color 0.2s;
  }
`

export const About = styled.div``
