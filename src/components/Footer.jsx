import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'

import GitHubIcon from '../assets/github-logo.svg'
import Button from '../components/Button'

const Root = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid lightgrey;
  padding: 16px 0;
  margin-top: 24px;
`

const FlexSpacer = styled.span`
  flex-grow: 1;
`

const Footer = _props => {
  return (
    <Root>
      <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/" target='_blank' rel='noopener'>
        <img
          alt="Licencia Creative Commons"
          src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
        />
      </a>
      <FlexSpacer />
      <Button component={RouterLink} to='/contact'>
        Contact
      </Button>
      <Button
        href='https://github.com/nicooga/nicooga.github.com'
        target='_blank'
        rel='noopeener'
        endIcon={<GitHubIcon />}
      >
        Check the source code
      </Button>
    </Root>
  )
}

export default Footer
