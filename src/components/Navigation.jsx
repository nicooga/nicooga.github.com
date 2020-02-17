import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as RouterLink, matchPath, withRouter } from 'react-router-dom'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Button from './Button'

const LINKS_CONFIG = [
  { to: '/about-me', label: 'About Me' },
  { to: '/about-software', label: 'About Software' },
  { to: '/about-stuff', label: 'About Stuff' },
  { to: '/all-posts', label: 'All posts' },
  { to: '/contact', label: 'Contact and links' }
]

const Root = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

const Spacer = styled.span`
  flex-grow: 1;
`

const MobileNavigationSpacer = styled.div`
  height: 64px;
`

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
}

// I want my link to react to route changes to re-calculate "isActive" value.
// withRouter HoC does exactly that.
const Link = withRouter(({ to, children, location, skipActiveStyle, onClick }) => { // eslint-disable-line react/prop-types
  const isActive = !skipActiveStyle && matchPath(location.pathname, { path: to, exact: true }) !== null

  return (
    <Button
      component={RouterLink}
      to={to}
      variant={isActive ? 'contained' : 'text'}
      color={isActive ? 'primary' : 'default'}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})

const MobileNavigation = _props => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MobileNavigationSpacer />

      <HideOnScroll>
        <AppBar>
          <Toolbar onClick={_ => setOpen(true)}>
            <IconButton edge='start'>
              <MenuIcon />
            </IconButton>

            <Typography variant='h6' element='h1'>
              Nicolas Oga
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <SwipeableDrawer open={open} onOpen={_ => setOpen(true)} onClose={_ => setOpen(false)} anchor='top' >
        <List>
          {LINKS_CONFIG.map(({ to, label }) => (
            <ListItem key='to'>
              <ListItemText>
                <Link to={to} onClick={_ => setOpen(false)}>{label}</Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  )
}

const DesktopNavigation = _props => (
  <Root>
    <Link to='/' skipActiveStyle>
      <Typography variant='h4' element='h1'>
        Nicolas Oga
      </Typography>
    </Link>

    <Spacer />

    {LINKS_CONFIG.map(({ to, label }) => (
      <Link key={to} to={to}>{label}</Link>
    ))}
  </Root>
)

const Navigation = _props => {
  if (window.innerWidth >= 1170) {
    return <DesktopNavigation />
  } else {
    return <MobileNavigation />
  }
}

export default Navigation
