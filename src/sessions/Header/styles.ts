import styled from 'styled-components'

export const Container = styled.div`
  header {
    position: relative;
    height: 100vh;
    min-height: 500px;
    width: 100%;
    background: #0d0d0d;
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
`
