import React from 'react'

import MaterialUIButton from '@material-ui/core/Button'
import P from '../components/Paragraph'
import A from '../components/InlineHyperLink'
import PostList from '../components/PostList'

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
      If that&apos;s the case you most likely want to know what I can say <A to='/about-software'>about software</A>, or maybe <A to='/contact'>contact me</A>? Don&apos;t be shy!
    </P>

    <P>
      Otherwise, I plan to post <A to='/about-stuff'>about other stuff</A> I&apos;m interested in in the future.
    </P>

    <P>
      You can also check what I can <A to='/about-me'>say about me</A>.
    </P>

    <P>
      Or take a look at my latest posts:
    </P>

    <PostList limit={5} />
  </div>
)

export default Home
