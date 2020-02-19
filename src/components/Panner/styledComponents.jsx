import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const PAN_CONTROL_OUTTER_PADDING = '30px'
const PAN_CONTROL_INNER_PADDING = '60px'

const Root = styled.span`
  display: block;
  position: relative;
  width: 100%;
  box-sizing: border-box;
`

const FilmStrip = styled.span`
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
  z-index: 1;
  transition: opacity 400ms;

  ${breakpoint('mobile', 'tablet')`
    pointer-events: none;
  `}
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

export { Root, FilmStrip, LeftPanControl, RightPanControl }
