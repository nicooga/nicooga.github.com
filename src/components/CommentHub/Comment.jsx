import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const DATE_FORMAT = 'MMMM Do YYYY hh:mm ZZ'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 8px;
  background-color: whitesmoke;
  border-radius: 4px;
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid lightgrey;
`

const Identification = styled.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 8px;
  }
`

const UserName = styled(Typography).attrs({ variant: 'caption' })`
  margin: 0 8px;
`

const Comment = ({ id, body, createdAt, userName, userAvatarUrl }) => (
  <Root>
    <TopRow>
      <Identification>
        <Avatar src={userAvatarUrl} alt={userName} />
        <UserName>{userName}</UserName>
      </Identification>

      <Typography variant='caption'>
        {moment(createdAt).format(DATE_FORMAT)}
      </Typography>
    </TopRow>

    <Typography variant='body1' component='span'>{body}</Typography>
  </Root>
)

export default Comment
