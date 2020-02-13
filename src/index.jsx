import 'regenerator-runtime/runtime'
import 'normalize.css'
import 'typeface-roboto'

import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom'

import ThemeProvider from './ThemeProvider'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import PostViewer from './pages/PostViewer'
import NotFound from './pages/NotFound'

import PostList from './components/PostList'

import Navigation from './components/Navigation'
import { GalleryOverlayProvider } from './components/GalleryOverlay'

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
  padding: 40px 0 0 8px;
`

const App = _props => (
  <ThemeProvider>
    <GalleryOverlayProvider>
      <Router>
        <Root>
          <MainContainer>
            <Navigation />

            <Body>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about-me' component={AboutMe} />
                <Route path='/contact' component={Contact} />
                {/* I use withRouter to force a re-render in route change */}
                <Route path='/about-software' render={withRouter(_ => <PostList filters={{ tagsInclude: ['software'] }}/>)} />
                <Route path='/about-stuff' render={withRouter(_ => <PostList filters={{ tagsExclude: ['software'] }}/>)} />
                <Route path='/all-posts' component={withRouter(PostList)} />
                <Route path='/posts/:slug' component={PostViewer} />
                <Route path='*' component={NotFound} />
              </Switch>
            </Body>
          </MainContainer>
        </Root>
      </Router>
    </GalleryOverlayProvider>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
