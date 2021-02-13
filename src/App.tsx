import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from './pages/Home'

import GlobalStyle from './styles/global'

function App(): JSX.Element {
  return (
    <Router>
      <Home />
      <GlobalStyle />
    </Router>
  )
}

export default App
