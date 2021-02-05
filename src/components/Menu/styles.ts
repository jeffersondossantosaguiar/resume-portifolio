import styled from 'styled-components'

export const Container = styled.div`
  #nav-wrap {
    font-size: 16px;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    z-index: 100;
    position: fixed;
    left: 0;
    top: 30px;
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
    margin-right: 20%;
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

  ul#nav li a:active {
    background-color: transparent;
  }
  ul#nav li.current a {
    color: #fff;
    font-weight: bold;
  }
`
