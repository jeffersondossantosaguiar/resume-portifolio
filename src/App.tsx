import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'

import GlobalStyle from './styles/global'

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <GlobalStyle />
    </Router>
  )
}

export default App
