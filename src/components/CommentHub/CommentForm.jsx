import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useForm, useField } from 'react-final-form-hooks'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import extractGqlValidationErrors from '../../extractGqlValidationErrors'
import { useAuth } from '../../components/AuthProvider'

import MuiTextField from '@material-ui/core/TextField'
import MuiAvatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
    }
  }
`

const Root = styled(Paper)`
  display: flex;
  align-items: center;
`

const Avatar = styled(MuiAvatar)`
  margin: 0 8px !important;
`

const TextField = styled(MuiTextField)`
  flex-grow: 1;
`

const CommentForm = ({ postSlug }) => {
  const { currentUser, logIn } = useAuth()
  const [createComment] = useMutation(CREATE_COMMENT_MUTATION)
  const client = useApolloClient()

  const { handleSubmit, form } = useForm({
    async onSubmit({ body }) {
      if (!body || !body.trim()) { return }
      if (!currentUser) { await logIn() }

      try {
        await createComment({ variables: { input: { postSlug, body }}})
        client.resetStore()
      } catch (error) {
        return extractGqlValidationErrors(error)
      }
    }
  })

  const body = useField('body', form)

  const onKeyDown = ev => ev.key === 'Enter' && (ev.ctrlKey || ev.shiftKey) && form.submit()

  return (
    <form onSubmit={handleSubmit} onKeyDown={onKeyDown}>
      <Root>
        <Avatar src={currentUser && currentUser.avatarUrl} alt={currentUser.name}/>

        <TextField
          label='Comment body'
          placeholder='Be the first one to comment!'
          variant='filled'
          multiline
          rows='2'
          {...body.input}
        />

        <IconButton type='submit'>
          <SendIcon />
        </IconButton>
      </Root>
    </form>
  )
}

CommentForm.propTypes = {
  postSlug: PropTypes.string.isRequired
}

export default CommentForm
