import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

import { useAuth } from '../../components/AuthProvider'

import CommentForm from './CommentForm'
import CommentList from './CommentList'

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const CommentHub = ({ postSlug }) => (
  <Root>
    <CommentList postSlug={postSlug} />
    <CommentForm postSlug={postSlug} />
  </Root>
)

CommentHub.propTypes = {
  postSlug: PropTypes.string.isRequired
}

export default CommentHub
