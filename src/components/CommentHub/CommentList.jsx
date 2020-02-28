import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Comment from './Comment'

const LIST_COMMENTS_QUERY = gql`
  query postComments($postSlug: String!) {
    postComments(postSlug: $postSlug) {
      id
      body
      createdAt
      user {
        id
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

const CommentList = ({ postSlug }) => {
  const { loading, error, data } = useQuery(LIST_COMMENTS_QUERY, { variables: { postSlug }})

  return (
    <Root>
      {!loading && !error && data.postComments.map(comment => (
        <Comment
          id={comment.id}
          body={comment.body}
          createdAt={comment.createdAt}
          userId={comment.user.id}
          userName={comment.user.name}
          userAvatarUrl={comment.user.avatarUrl}
        />
      ))}
    </Root>
  )
}

CommentList.propTypes = {
  postSlug: PropTypes.string.isRequired
}

export default CommentList
