import { useRef } from "react"

const useSwipeScroll = scrollableRef => {
  const lastTouchX = useRef()

  const onTouchMove = ev => {
    const { screenX: x } = ev.touches[0]

    if (lastTouchX.current) {
      const delta = lastTouchX.current - x
      scrollableRef.current.scrollLeft += delta
    }

    lastTouchX.current = x
  };

  const onTouchEnd = _ => {
    lastTouchX.current = undefined
  };

  return { onTouchMove, onTouchEnd }
};

export default useSwipeScroll
