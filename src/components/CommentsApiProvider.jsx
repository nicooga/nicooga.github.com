import React from 'react'
import PropTypes from 'prop-types'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ls from 'local-storage'

const COMMENTS_API_URL = process.env.COMMENTS_API_URL

const httpLink = createHttpLink({ uri: COMMENTS_API_URL })

const authLink = setContext((_, { headers }) => {
  const token = ls.get('token')

  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const CommentsApiProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)

CommentsApiProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default CommentsApiProvider
