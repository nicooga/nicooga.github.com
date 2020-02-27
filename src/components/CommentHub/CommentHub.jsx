import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Typography from '@material-ui/core/Typography'

import { useAuth } from '../../components/AuthProvider'
import CommentForm from './CommentForm'

const LIST_COMMENTS_QUERY = gql`
  query ListComments($postSlug: String!) {
    listComments(postSlug: $postSlug) {
      id
      body
      user {
        name
        avatarUrl
      }
    }
  }
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const CommentHub = ({ postSlug }) => {
  const { currentUser, logIn, logOut } = useAuth()

  return (
    <Root>
      <CommentForm postSlug={postSlug} />
    </Root>
  )
}

CommentHub.propTypes = {
  postSlug: PropTypes.string.isRequired
}

export default CommentHub
