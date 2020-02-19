import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import Button from '@material-ui/core/Button'

const InlineHyperLink = styled(Button).attrs(props => ({
  ...(props.external ? { rel: 'noopener', target: '_blank' } : {}),
  size: props.size || 'small',
  color: props.color || 'primary',
  component: props.external ? 'a' : RouterLink,
  children: props.children || props.href
}))`
  text-transform: none !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  font-family: inherit !important;
  line-height: inherit !important;
  padding: 0 3px !important;
  margin-left: -3px !important;
  margin-right: -3px !important;
  margin-top: -1px !important;
  letter-spacing: inherit !important;
`

InlineHyperLink.propTypes = {
  external: PropTypes.bool
}

export default InlineHyperLink
