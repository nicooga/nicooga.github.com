import React from 'react'
import styled from 'styled-components'

import MaterialUIButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Button = styled(MaterialUIButton).attrs({ size: 'small' })`
  text-transform: none !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  font-family: inherit !important;
  line-height: inherit !important;
  padding: 0 3px !important;
  margin: 0 -3px !important;
  color: tomato !important;
`

const Home = _props => (
  <div>
    <Typography variant='body1' paragraph>
      Hello there!
      <br />
      I&quot;m Nicolas, a guy that lives in Argentina.
    </Typography>

    <Typography variant='body1' paragraph>
      You are probably here because you saw the link to my website in LinkedIn or some work related site.
      <br />
      If that&quot;s the case you most likely want to know what I can say <Button href='/about-software'>about software</Button>.
    </Typography>

    <Typography variant='body1' paragraph>
      Otherwise, I plan to post <Button href='/about-stuff'>about other stuff</Button> I&quot;m intersted in the future.
    </Typography>

    <Typography variant='body1' paragraph>
      You can also check what I can <Button href='/about-me'>say about me</Button>.
    </Typography>
  </div>
)

export default Home
