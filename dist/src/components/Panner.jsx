import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const PAN_CONTROL_OUTTER_PADDING = '30px'
const PAN_CONTROL_INNER_PADDING = '60px'
const PANNING_INTERVAL = 1
const PANNING_AMOUNT = 5

const Root = styled.span`
  display: block;
  position: relative;
  width: 100%;
`

const Strip = styled.span`
  display: flex;
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
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
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 400ms;
`

const LeftPanControl = styled(PanControl)`
  left: 0;
  padding-left: ${PAN_CONTROL_OUTTER_PADDING};
  padding-right: ${PAN_CONTROL_INNER_PADDING};
  background: linear-gradient(to right, ${props => props.color}, transparent);
`

const RightPanControl = styled(PanControl)`
  right: 0;
  padding-left: ${PAN_CONTROL_INNER_PADDING};
  padding-right: ${PAN_CONTROL_OUTTER_PADDING};
  background: linear-gradient(to left, ${props => props.color}, transparent);
`

const allImagesLoaded = node => {
  const images = node.querySelectorAll('img')

  const promises =
    Array.prototype.map.call(images, image =>
      new Promise(resolve => image.addEventListener('load', resolve))
    )

  return Promise.all(promises)
}

// This component replaces a horizontal scroll bar with mouseover behavior.
const Panner = ({ children, className, panControlColor, center }) => {
  const rootNode = useRef()
  const [displayArrows, setDisplayArrows] = useState(false)
  const [panning, setPanning] = useState(false)
  const [scrollLeft, setScrollLeft] = useState(0)
  const maxScroll = useRef()
  const panningInterval = useRef()

  useEffect(_ => {
    if (!rootNode.current) { return }

    (async _ => {
      if (!rootNode.current) { return }
      await allImagesLoaded(rootNode.current)
      if (rootNode.current.scrollWidth > rootNode.current.clientWidth) {
        maxScroll.current = rootNode.current.scrollWidth - rootNode.current.clientWidth
        setDisplayArrows(true)
      }
    })()
  }, [rootNode])

  const startPanningLeft = _ => {
    if (panning) { return }
    setPanning(true)

    panningInterval.current = setInterval(
      _ => {
        rootNode.current.scrollLeft -= PANNING_AMOUNT
        setScrollLeft(rootNode.current.scrollLeft)
      },
      PANNING_INTERVAL
    )
  }

  const startPanningRight = _ => {
    if (panning) { return }

    setPanning(true)

    const remainingScroll = maxScroll.current - rootNode.current.scrollLeft

    panningInterval.current = setInterval(
      _ => {
        rootNode.current.scrollLeft += Math.min(PANNING_AMOUNT, remainingScroll)
        setScrollLeft(rootNode.current.scrollLeft)
      },
      PANNING_INTERVAL
    )
  }

  const stopPanning = _ => {
    clearInterval(panningInterval.current)
    setPanning(false)
  }

  return (
    <Root className={className}>
      {displayArrows && rootNode.current && (
        <>
          <LeftPanControl onMouseEnter={startPanningLeft} onMouseLeave={stopPanning} color={panControlColor} visible={scrollLeft > 0}>
            <IconButton>
              <ArrowBackIosIcon style={{ color: 'white' }} />
            </IconButton>
          </LeftPanControl>

          <RightPanControl onMouseEnter={startPanningRight} onMouseLeave={stopPanning} color={panControlColor} visible={scrollLeft < maxScroll.current}>
            <IconButton>
              <ArrowForwardIosIcon style={{ color: 'white' }} />
            </IconButton>
          </RightPanControl>
        </>
      )}

      <Strip ref={rootNode} style={{ justifyContent: center && !displayArrows && 'center' }}>
        {children}
      </Strip>
    </Root>
  )
}

Panner.defaultProps = {
  panControlColor: 'rgba(256, 256, 256, 0.7)',
  center: false
}

Panner.propTypes = {
  panControlColor: PropTypes.string,
  center: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Panner
