import 'normalize.css'
import 'typeface-roboto'

import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import NotFound from './pages/NotFound'

import Navigation from './components/Navigation'

const Root = styled.div`
  display: flex;
  justify-content: center;

  *, *::after, *::before {
    box-sizing: border-box;
  }
`

const MainContainer = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 70px 0;
`

const Body = styled.div`
  padding: 0 8px;
`

const App = _props => (
  <Router>
    <Root>
      <MainContainer>
        <Navigation />

        <Body>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about-me' component={AboutMe} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Body>
      </MainContainer>
    </Root>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
