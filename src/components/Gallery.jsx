import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Img = styled.img`
  display: block;
  border: 1px solid lightgrey;
  border-radius: 10px;
  object-fit: cover;
  height: 100%;

  &:not(:last-child) {
    margin-right: 8px;
  }
`

const Root = styled.span`
  display: flex;
  width: 100%;
  height: 300px;
  overflow-x: auto;
  margin: 16px 0;
  padding: 8px;
`

const Gallery = ({ images }) => (
  <Root>
    {images.map((src, index) => <Img src={src} key={index} />)}
  </Root>
)

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Gallery
