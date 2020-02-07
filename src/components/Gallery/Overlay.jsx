import React, { useContext } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

import Context from './Context'

const STRIP_HEIGHT = '200px'

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 2;
  display: flex;
  flex-direction: column;
`

const CurrentImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - ${STRIP_HEIGHT});
`

const CurrentImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Strip = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0c0b0b;
  height: ${STRIP_HEIGHT};
`

const StripItem = styled.img`
  height: calc(100% - 16px);
  margin: 7px 3.5px;
  border: 1px solid ${props => props.current ? 'white' : 'transparent'};
  cursor: pointer;
`

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`

const Overlay = ({ images, currentImage }) => {
  const { hideOverlay, displayOverlay } = useContext(Context)

  return (
    <>
      <GlobalStyle />
      <Root>
        <CurrentImageWrapper>
          <CurrentImage src={currentImage} />
        </CurrentImageWrapper>

        <Strip>
          {images.map((image, index) => (
            <StripItem
              src={image}
              key={index}
              onClick={_ => displayOverlay({ images, currentImage: image })}
              current={image === currentImage}
            />
          ))}
        </Strip>

        <CloseButtonWrapper>
          <IconButton onClick={hideOverlay}>
            <CloseIcon style={{ color: 'white' }} />
          </IconButton>
        </CloseButtonWrapper>
      </Root>
    </>
  )
}

export default Overlay
