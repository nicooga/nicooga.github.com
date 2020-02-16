import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useGalleryOverlay } from './GalleryOverlay'

const Root = styled.div`
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 500px;
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: zoom-in;
`

const Thumbnail = ({ src }) => {
  const { displayOverlay } = useGalleryOverlay()

  return (
    <Root>
      <Img src={src} onClick={_ => displayOverlay({ currentImage: src })} />
    </Root>
  )
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired
}

export default Thumbnail
