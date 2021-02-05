import React from 'react'

import GlobalStyle from './styles/global'
import Menu from './components/Menu'
import Header from './pages/Header'
import About from './pages/About'

const App: React.FC = () => (
  <>
    <Menu />
    <Header />
    <About />
    <GlobalStyle />
  </>
)

export default App
