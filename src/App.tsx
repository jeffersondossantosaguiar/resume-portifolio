import React from 'react'

import GlobalStyle from './styles/global'
import Menu from './components/Menu'
import Header from './sessions/Header'
import About from './sessions/About'
import Portifolio from './sessions/Portifolio'
import Education from './sessions/Education'
import Contact from './sessions/Contact'

const App: React.FC = () => (
  <>
    <Menu />
    <Header />
    <About />
    <Portifolio />
    <Education />
    <Contact />
    <GlobalStyle />
  </>
)

export default App
