import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useAuth } from '../../components/AuthProvider'

const Root = styled.div`
`

const CommentHub = ({ threadId }) => {
  const { currentUser, logIn, logOut } = useAuth()

  return (
    <Root>
      {currentUser ? (
        <button onClick={logOut}>Sign out</button>
      ) : (
        <button onClick={logIn}>Sign In to comment</button>
      )}
    </Root>
  )
}

export default CommentHub
