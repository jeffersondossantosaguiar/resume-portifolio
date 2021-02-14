import styled from 'styled-components'

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`
export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  color: #fff;
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
  margin-top: 4px;
  color: #fff;
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
