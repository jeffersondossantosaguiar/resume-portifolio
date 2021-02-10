import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 100;
    min-height: 8vh;
    background-color: #0d0d0d;
  }

  .logo {
    color: #f2f2f2;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-size: 20px;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    justify-content: space-around;
    min-width: 500px;
  }

  .nav-links li {
    list-style: none;
  }

  .nav-links a {
    color: #f2f2f2;
    text-decoration: none;
    letter-spacing: 2.5px;
    font-size: 16px;
    transition: color 0.5s;
    &:hover {
      color: ${shade(0.2, '#11abb0')};
    }
  }
  /*  .nav-links a:hover {
    color: #11abb0;
  } */
`
