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
  const { loading, data } = useQuery(LIST_COMMENTS_QUERY, { variables: { postSlug }})

  return (
    <Root>
      {!loading && data.postComments.map(comment => (
        <Comment
          id={comment.id}
          body={comment.body}
          createdAt={comment.createdAt}
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
