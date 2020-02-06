import React from 'react'
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

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  overflow-x: auto;
  margin: 16px 0;
  padding: 8px;
`

const InlineGallery = ({ images }) => (
  <Root>
    {images.map(src => <Img src={src} />)}
  </Root>
)

export default InlineGallery
