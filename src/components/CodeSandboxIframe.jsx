import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

const isElementInViewport = el => {
  var rect = el.getBoundingClientRect()

  const windowHeight = window.innerHeight || document.documentElement.clientHeight

  return (
    (rect.bottom >= 0 && rect.bottom <= windowHeight) ||
    (rect.top >= 0 && rect.top <= windowHeight)
  )
}

const listenToVisibilityChange = (el, callback) => {
  let oldVisible

  const handler = _ => {
    const visible = isElementInViewport(el)

    if (visible !== oldVisible) {
      oldVisible = visible
      callback(visible)
    }
  }

  const eventTypes = ['DOMContentLoaded', 'load', 'resize', 'scroll']

  eventTypes.forEach(eventType => window.addEventListener(eventType, handler))
  return _ => eventTypes.forEach(eventType => window.removeEventListener(eventType, handler))
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  margin-bottom: 16px;
`

const Content = styled.div`
  position: relative;
  transition: opacity 300ms;
`

const Caption = styled(Typography).attrs({ variant: 'caption', component: 'div' })`
  padding: 3px 5px;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  max-height: 70vh;
  border: 1px solid lightgrey;
  overflow: 'hidden';
  margin-bottom: 16px;
  box-sizing: border-box;
`

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const LoadingPlaceholder = styled(Placeholder)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: lightgrey;
  display: flex;

  > :first-child {
    margin-bottom: 16px;
  }
`

const CodeSandboxIframe = ({ slug, caption, view, height, module }) => {
  const rootRef = useRef()
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const url = new URL('https://codesandbox.io/embed/' + slug)

  useEffect(_ => {
    if (!rootRef.current) { return }
    listenToVisibilityChange(rootRef.current, setIsVisible)
  }, [rootRef])

  url.searchParams.append('autoresize', 1)
  url.searchParams.append('fontsize', 14)
  url.searchParams.append('hidenavigation', 1)
  url.searchParams.append('theme', 'dark')
  view && url.searchParams.append('view', view)
  module && url.searchParams.append('module', module)

  const IframeWrapper = _props => (
    <>
      <Iframe
        src={url}
        title={caption}
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        onLoad={_ => setLoading(false)}
      />

      {loading && (
        <LoadingPlaceholder>
          <CircularProgress />
          Loading CodeSandbox ...
        </LoadingPlaceholder>
      )}
    </>
  )

  const HidingPlaceholder = _props => (
    <Placeholder>
      Hiding this Iframe for performace reasons :)
    </Placeholder>
  )

  return (
    <Root ref={rootRef}>
      <Caption>{caption}</Caption>
      <Content style={{ height }}>
        {isVisible && false ? <IframeWrapper /> : <HidingPlaceholder />}
      </Content>
    </Root>
  )
}

CodeSandboxIframe.propTypes = {
  slug: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  view: PropTypes.string,
  module: PropTypes.string,
  height: PropTypes.string
}

CodeSandboxIframe.defaultProps = {
  height: '800px'
}

export default CodeSandboxIframe
