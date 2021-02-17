import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;

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
