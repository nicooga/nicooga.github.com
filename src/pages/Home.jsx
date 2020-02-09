import React from 'react'
import styled from 'styled-components'

import MaterialUIButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Button = styled(MaterialUIButton).attrs({ size: 'small', color: 'primary' })`
  text-transform: none !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  font-family: inherit !important;
  line-height: inherit !important;
  padding: 0 3px !important;
  margin: 0 -3px !important;
`

const P = styled(Typography).attrs({ variant: 'body1', paragraph: true })``

const Home = _props => (
  <div>
    <P>
      Hello there!
      <br />
      I&apos;m Nicolas, a guy that lives in Argentina.
    </P>

    <P>
      You are probably here because you saw the link to my website in LinkedIn or some work-related site.
      <br />
      If that&apos;s the case you most likely want to know what I can say <Button href='/about-software'>about software</Button>, or maybe <Button href='/contact'>contact me</Button>? Don&apos;t be shy!
    </P>

    <P>
      Otherwise, I plan to post <Button href='/about-stuff'>about other stuff</Button> I&apos;m interested in in the future.
    </P>

    <P>
      You can also check what I can <Button href='/about-me'>say about me</Button>.
    </P>
  </div>
)

export default Home
