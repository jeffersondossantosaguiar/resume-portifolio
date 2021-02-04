import styled from 'styled-components'

export const Container = styled.div`
  header {
    position: relative;
    height: 100vh;
    min-height: 500px;
    width: 100%;
    background: #000;
    background-size: cover;
    text-align: left;
    overflow: hidden;
  }

  header:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  header .banner {
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    width: 0 auto;
    padding-bottom: 30px;
    text-align: center;
  }

  header .banner-text {
    width: 100%;
    margin-left: 200px;
  }

  header .banner-text h1 {
    font-size: 72px;
    font-weight: 300;
    color: #fff;
    margin: 0 auto 16px auto;
    strong {
      font-weight: 500;
    }
  }
  header .banner-text h3 {
    color: #fff;
    margin-top: 12px;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.75em;
  }
  header .banner-text h3 span,
  header .banner-text h3 a {
    color: #fff;
  }
  header .banner-text hr {
    width: 60%;
    margin: 18px auto 24px auto;
    border-color: #2f2d2e;
    border-color: rgba(150, 150, 150, 0.1);
  }

  header .scrolldown a {
    position: absolute;
    bottom: 100px;
    left: 50%;
    margin-left: -29px;
    color: #fff;
    display: block;
    height: 42px;
    width: 42px;
    font-size: 42px;
    line-height: 42px;
    color: #fff;
    border-radius: 100%;
  }
  header .scrolldown a:hover {
    color: #11abb0;
  }

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
