import React, { useState } from 'react'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import MuiButton from '@material-ui/core/Button'

import ContactForm from './ContactForm'

import GitHubIcon from '../../assets/github-logo.svg'
import LinkedInIcon from './linkedin.svg'
import StackOverflow from './stackoverflow.svg'
import EmailIcon from '@material-ui/icons/Email'

const LINK_CONFIG = [
  {
    icon: <EmailIcon />,
    text: 'Email',
    href: 'mailto:2112.oga@gmail.com',
  },
  {
    icon: <GitHubIcon />,
    text: 'GitHub',
    description: 'Check my repositories',
    href: 'https://github.com/nicooga'
  },
  {
    icon: <LinkedInIcon />,
    text: 'LinkedIn',
    description: 'See my profile and experience',
    href: 'https://www.linkedin.com/in/nicolasoga/'
  },
  {
    icon: <StackOverflow />,
    text: 'StackOverflow',
    description: <>Check my questions and answers.<br/>I have over 6k reputation!</>,
    href: 'https://stackoverflow.com/users/1740079/nicooga'
  }
]

const Root = styled.div`
  display:  flex;
  justify-content: space-between;
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled(MuiButton)`
  text-transform: none !important;
`

const ContactLinksRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`

const ContactLinkRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

const ContactLinkDescription = styled.span`
  width: 300px;
  height: 30px;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 500ms;
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-context: center;
`

const ContactLinks = _props => {
  const [currentDesc, setCurrentDesc] = useState()

  return (
    <ContactLinksRoot>
      {LINK_CONFIG.map(
        ({ icon, href, text, description }, index) => (
          <ContactLinkRoot key={index}>
            <Button
              startIcon={icon}
              onMouseEnter={_ => setCurrentDesc(description)}
              onMouseLeave={_ => setCurrentDesc(undefined)}
              href={href}
              target='_blank'
            >
              {text}
            </Button>
          </ContactLinkRoot>
        )
      )}

      <ContactLinkDescription visible={!!currentDesc}>
        <Typography variant='body1'>
          {currentDesc}
        </Typography>
      </ContactLinkDescription>
    </ContactLinksRoot>
  )
}

const Contact = _props => {
  return (
    <Root>
      <LeftColumn>
        <Typography variant='body1' paragraph>
          Find me at these places ...
        </Typography>

        <ContactLinks />
      </LeftColumn>

      <FormSection>
        <Typography variant='body1' paragraph>
          ... or simply use this contact form
        </Typography>

        <ContactForm />
      </FormSection>
    </Root>
  )
}

export default Contact
