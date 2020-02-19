import { useRef, useState } from 'react'

const useDragScroll = scrollableRef => {
  const [dragging, setDragging] = useState(false)
  const lastX = useRef()

  const startDragging = _ev => setDragging(true)
  const stopDragging = _ev => setDragging(false)

  const onMouseMove = ev => {
    const { screenX: x } = ev;x

    if (dragging && lastX.current) {
      const delta = lastX.current - x
      scrollableRef.current.scrollLeft += delta
    }

    lastX.current = x
  }

  return {
    onMouseDown: startDragging,
    onMouseUp: stopDragging,
    onMouseLeave: stopDragging,
    onMouseMove,
    style: dragging ? { cursor: 'grabbing' } : {}
  }
}

export default useDragScroll;
