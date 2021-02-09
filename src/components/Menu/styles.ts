import styled from 'styled-components'

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 30px;
  border: 5px solid red;
  width: 100%;
  max-width: 1440px;

  #nav-wrap {
    font-size: 16px;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2.5px;
  }
  .opaque {
    background-color: #333;
  }

  /* hide toggle button */
  #nav-wrap > a.mobile-btn {
    display: none;
  }

  ul#nav {
    min-height: 48px;
    width: auto;
    text-align: right;
  }
  ul#nav li {
    position: relative;
    list-style: none;
    height: 48px;
    display: inline-block;
  }

  ul#nav li a {
    display: inline-block;
    padding: 8px 13px;
    line-height: 32px;
    text-decoration: none;
    text-align: left;
    color: #979797;
  }

  ul#nav li a:hover {
    color: #11abb0;
  }

  ul#nav li a:active {
    background-color: transparent;
  }
  ul#nav li.current a {
    color: #fff;
    font-weight: bold;
  }
`
