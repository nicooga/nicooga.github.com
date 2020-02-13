import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Context from './Context'
import GalleryOverlay from './GalleryOverlay'

const GalleryOverlayProvider = ({ children }) => {
  const [active, setActive] = useState(false)
  const [images, setImages] = useState()
  const [currentImage, setCurrentImage] = useState()

  const displayOverlay = ({ images, currentImage }) => {
    setActive(true)
    setImages(images)
    setCurrentImage(currentImage)
  }

  const hideOverlay = _ => setActive(false)

  return (
    <Context.Provider value={{ displayOverlay, hideOverlay }}>
      {active && <GalleryOverlay images={images} currentImage={currentImage} />}
      {children}
    </Context.Provider>
  )
}

GalleryOverlayProvider.propTypes = {
  children: PropTypes.node
}

export default GalleryOverlayProvider
