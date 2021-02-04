import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  padding-top: 72px;
  padding-bottom: 66px;
  overflow: hidden;

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    width: 96%;
    max-width: 80%;
    margin: 0 auto;
    justify-items: center;
    padding-bottom: 72px;
  }
  .columns {
    width: 70%;
    padding: 0 20px;
    min-height: 1px;
  }
  .skills {
    padding-top: 28px;
    text-align: center;
    background: #f2f2f2;
    height: 440px;
  }

  h2 {
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    color: #7a7a7a;
  }
`
