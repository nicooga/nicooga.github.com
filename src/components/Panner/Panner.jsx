import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import useDragScroll from './useDragScroll'
import useHoverScroll from './useHoverScroll'
import useSwipeScroll from './useSwipeScroll'
import { Root, FilmStrip, LeftPanControl, RightPanControl } from './styledComponents'

const Panner = ({ children, className, panControlColor, center }) => {
  const filmStripRef = useRef()
  const draggableProps = useDragScroll(filmStripRef)
  const {
    scrollableProps,
    leftPanControlProps,
    rightPanControlProps
  } = useHoverScroll(filmStripRef)
  const swipeableProps = useSwipeScroll(filmStripRef)

  return (
    <Root className={className} {...swipeableProps}>
      <LeftPanControl {...leftPanControlProps}>
        <IconButton>
          <ArrowBackIosIcon style={{ color: 'white' }} />
        </IconButton>
      </LeftPanControl>

      <RightPanControl {...rightPanControlProps}>
        <IconButton>
          <ArrowForwardIosIcon style={{ color: 'white' }} />
        </IconButton>
      </RightPanControl>

      <FilmStrip
        ref={filmStripRef}
        style={{ justifyContent: center && 'center' }}
        {...scrollableProps}
        {...draggableProps}
      >
        {children}
      </FilmStrip>
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
