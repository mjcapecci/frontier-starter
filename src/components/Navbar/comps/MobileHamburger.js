import React from "react"
import styled from "styled-components"

const MobileHamburger = ({ active, setActive }) => {
  return (
    <StyledContainer
      className="hamburger-icon"
      onClick={() => setActive(!active)}
      active={active}
    >
      <StyledLineOne active={active} />
      <StyledLineTwo active={active} />
      <StyledLineThree active={active} />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 20px;
  z-index: 10;
  transition: all 0.2s;
  transform: ${props => (props.active ? "rotate(180deg)" : "rotate(0deg)")};
`

const StyledLineOne = styled.div`
  height: 3px;
  width: 25px;
  margin: 5px;
  background: white;
  transition: all 0.1s ease;
  transform: ${props => (props.active ? "rotate(45deg)" : "rotate(0deg)")};
`

const StyledLineTwo = styled.div`
  height: 3px;
  width: 25px;
  margin: 5px;
  background: white;
  transition: opacity 0.1s;
  opacity: ${props => (props.active ? "0" : "1")};
`

const StyledLineThree = styled.div`
  height: 3px;
  width: 25px;
  margin: 5px;
  background: white;
  transition: all 0.1s ease;
  transform: ${props => (props.active ? "rotate(-45deg)" : "rotate(0deg)")};
`

export default MobileHamburger
