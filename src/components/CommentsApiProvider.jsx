import React from 'react'
import PropTypes from 'prop-types'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

const CommentsApiProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)

CommentsApiProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default CommentsApiProvider
