import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages'

import GlobalStyle from './styles/global'

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />
      </Switch>
      <GlobalStyle />
    </Router>
  )
}

export default App
