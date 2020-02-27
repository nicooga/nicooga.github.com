const extractGqlValidationErrors = error => {
  const badUserInputerror =
    error
      .graphQLErrors
      .find(gqlError => gqlError.extensions.code === 'BAD_USER_INPUT')

  if (badUserInputerror) {
    return badUserInputerror.extensions.exception.errors
  } else {
    throw error
  }
}

export default extractGqlValidationErrors
