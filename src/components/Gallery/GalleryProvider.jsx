import React, { useState } from 'react'

import Context from './Context'
import Overlay from './Overlay'

const GalleryProvider = ({ children }) => {
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
      {active && <Overlay images={images} currentImage={currentImage} />}
      {children}
    </Context.Provider>
  )
}

export default GalleryProvider
