import { useRef, useState, useEffect } from "react";

const PANNING_INTERVAL = 1;
const PANNING_AMOUNT = 5;

const useHoverScroll = scrollableRef => {
  const panning = useRef(false);
  const panningInterval = useRef();
  const [scrollLeft, setScrollLeft] = useState(0);

  // Make sure we don't left an interval hanging
  useEffect(_ => _ => clearInterval(panningInterval.current), []);

  const onScroll = ev => setScrollLeft(ev.target.scrollLeft);

  const startPanning = amount => {
    if (panning.current) {
      return;
    }
    panning.current = true;
    panningInterval.current = setInterval(_ => {
      scrollableRef.current.scrollLeft += amount;
    }, PANNING_INTERVAL);
  };

  const stopPanning = _ => {
    clearInterval(panningInterval.current);
    panning.current = false;
  };

  const shouldHideLeftPanControl = _ => scrollLeft === 0;

  const shouldHideRightPanControl = _ =>
    scrollableRef.current &&
    scrollLeft >=
      scrollableRef.current.scrollWidth - scrollableRef.current.clientWidth;

  return {
    scrollableProps: { onScroll },
    leftPanControlProps: {
      onMouseEnter: _ => startPanning(-PANNING_AMOUNT),
      onMouseLeave: _ => stopPanning(),
      style: shouldHideLeftPanControl() ? { opacity: 0 } : {}
    },
    rightPanControlProps: {
      onMouseEnter: _ => startPanning(PANNING_AMOUNT),
      onMouseLeave: _ => stopPanning(),
      style: shouldHideRightPanControl() ? { opacity: 0 } : {}
    }
  };
};

export default useHoverScroll;
