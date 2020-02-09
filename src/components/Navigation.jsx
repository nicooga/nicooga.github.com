import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import MaterialUIButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Root = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

const Button = styled(MaterialUIButton)`
  text-transform: capitalize !important;
`

const Spacer = styled.span`
  flex-grow: 1;
`

const Link = ({ to, children }) => ( // eslint-disable-line react/prop-types
  <Button component={RouterLink} to={to} size='small'>{children}</Button>
)

const Navigation = _props => (
  <Root>
    <Link to='/'>
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
