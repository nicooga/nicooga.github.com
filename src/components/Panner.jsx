import React, { useState, useCallback, useRef } from 'react'
import styled from 'styled-components'

import MaterialUIIconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const ROOT_PADDING = 8
const PADDING_A = '10px'
const PADDING_B = '60px'
const PAN_BACKGROUND = 'black'
const PANNING_INTERVAL = 1
const PANNING_AMOUNT = 5

const IconButton = styled(MaterialUIIconButton)`
  pointer-events: all !important;
`

const Root = styled.span`
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 16px 0;
  background-color: black;
  padding: ${ROOT_PADDING}px;
`

const Wrapper = styled.span`
  display: block;
  display: flex;
  height: 300px;
  transform: translate(${props => props.offset}px);
`

const PanControl = styled.span`
  display: block;
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: wait;
  z-index: 1;
`

const LeftPanControl = styled(PanControl)`
  left: 0;
  padding-left: ${PADDING_A};
  padding-right: ${PADDING_B};
  background: linear-gradient(90deg, ${PAN_BACKGROUND} 0%, transparent 100%);
`

const RightPanControl = styled(PanControl)`
  right: 0;
  padding-left: ${PADDING_B};
  padding-right: ${PADDING_A};
  background: linear-gradient(90deg, transparent 0%, ${PAN_BACKGROUND} 100%);
`

const allImagesLoaded = node => {
  const images = node.querySelectorAll('img')

  const promises =
    Array.prototype.map.call(images, image =>
      new Promise(resolve => image.addEventListener('load', resolve))
    )

  return Promise.all(promises)
}

const Panner = ({ children, className }) => {
  const [maxOffset, setMaxOffset] = useState()
  const [displayArrows, setDisplayArrows] = useState(false)
  const [offset, setOffset] = useState(0)
  const [panning, setPanning] = useState(false)
  const panningInterval = useRef()

  const ref = useCallback(async node => {
    if (!node) { return }
    await allImagesLoaded(node)
    if (node.scrollWidth > node.clientWidth) {
      setMaxOffset(node.clientWidth - node.scrollWidth - ROOT_PADDING)
      setDisplayArrows(true)
    }
  })

  const startPanningLeft = _ => {
    if (panning || offset >= 0) { return }
    
    setPanning(true)

    panningInterval.current = setInterval(
      _ => setOffset(o => {
        if (o >= 0) {
          stopPanning()
          return o
        } else {
          return o + PANNING_AMOUNT
        }
      }),
      PANNING_INTERVAL
    )
  }

  const startPanningRight = _ => {
    if (panning) { return }

    setPanning(true)

    panningInterval.current = setInterval(
      _ => setOffset(o => {
        if (o < maxOffset) {
          stopPanning()
          return o
        } else {
          return o - PANNING_AMOUNT
        }
      }),
      PANNING_INTERVAL
    )
  }

  const stopPanning = _ => {
    clearInterval(panningInterval.current)
    setPanning(false)
  }

  return (
    <Root className={className} ref={ref}>
      {displayArrows && !(offset >= 0) && (
        <LeftPanControl onMouseEnter={startPanningLeft} onMouseLeave={stopPanning}>
          <IconButton>
            <ArrowBackIosIcon style={{ color: 'white' }} />
          </IconButton>
        </LeftPanControl>
      )}

      <Wrapper style={{ transform: `translate(${offset}px)` }}>
        {children}
      </Wrapper>

      {displayArrows && !(offset < maxOffset) && (
        <RightPanControl onMouseEnter={startPanningRight} onMouseLeave={stopPanning}>
          <IconButton>
            <ArrowForwardIosIcon style={{ color: 'white' }} />
          </IconButton>
        </RightPanControl>
      )}
    </Root>
  )
}

export default Panner
