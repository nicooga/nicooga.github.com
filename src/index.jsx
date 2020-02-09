import 'regenerator-runtime/runtime'
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

import ThemeProvider from './ThemeProvider'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import Navigation from './components/Navigation'
import { GalleryProvider } from './components/Gallery'

const Root = styled.div`
  display: flex;
  justify-content: center;
`

const MainContainer = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 70px 0;
`

const Body = styled.div`
  padding: 40px 8px;
`

const App = _props => (
  <ThemeProvider>
    <GalleryProvider>
      <Router>
        <Root>
          <MainContainer>
            <Navigation />

            <Body>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about-me' component={AboutMe} />
                <Route path='/contact' component={Contact} />
                <Route path='*' component={NotFound} />
              </Switch>
            </Body>
          </MainContainer>
        </Root>
      </Router>
    </GalleryProvider>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
