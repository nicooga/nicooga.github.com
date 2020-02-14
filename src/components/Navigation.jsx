import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link as RouterLink, matchPath, withRouter } from 'react-router-dom'

import MaterialUIButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Button from './Button'

const Root = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

const Spacer = styled.span`
  flex-grow: 1;
`

// I want my link to react to route changes to re-calculate "isActive" value.
// withRouter HoC does exactly that.
const Link = withRouter(({ to, children, location, skipActiveStyle }) => { // eslint-disable-line react/prop-types
  const isActive = !skipActiveStyle && matchPath(location.pathname, { path: to, exact: true }) !== null

  return (
    <Button
      component={RouterLink}
      to={to}
      variant={isActive ? 'contained' : 'text'}
      color={isActive ? 'primary' : 'default'}
    >
      {children}
    </Button>
  )
})

const Navigation = _props => (
  <Root>
    <Link to='/' skipActiveStyle>
      <Typography variant='h4' element='h1'>
        Nicolas Oga
      </Typography>
    </Link>

    <Spacer />

    <Link to='/'>Home</Link>
    <Link to='/about-me'>About Me</Link>
    <Link to='/about-software'>About Software</Link>
    <Link to='/about-stuff'>About Stuff</Link>
    <Link to='/all-posts'>All posts</Link>
    <Link to='/contact'>Contact and links</Link>
  </Root>
)

export default Navigation
