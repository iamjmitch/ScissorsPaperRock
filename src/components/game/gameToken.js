//dependancies
import React from "react"
import styled from "styled-components"

const StyledToken = styled.div`
  z-index: 100;
  transition: 0.5s linear;
  animation-name: fadeIn;
  animation-duration: 0.9s;
  padding: 0 35px;
`
const winGlowSettings =
  " 0px 0px 0px 40px #ffffff04, 0px 0px 0px 80px #ffffff04, 0px 0px 0px 130px #ffffff04;"

const StyledOutter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.gradient};

  width: 230px;
  height: 230px;
  border-radius: 50%;
  box-shadow: ${props =>
    props.winGlow === true && props.thinking === false
      ? props => `${props.shadow}, ${winGlowSettings}`
      : props => props.shadow};

  &:hover {
    cursor: ${props => (props.clickable === "yes" ? "pointer" : "auto")};
  }
`
const StyledInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  box-shadow: inset 0px 9px 0px 0px #babfd2;
  img {
    width: 45%;
    height: auto;
  }
`

const Token = ({
  thinking,
  player,
  gradient,
  shadow,
  clickable,
  name,
  winGlow,
  iconURL,
  handler,
}) => {
  return (
    <StyledToken thinking={thinking} player={player}>
      <StyledOutter
        gradient={gradient}
        shadow={shadow}
        clickable={clickable}
        onClick={() => (clickable === "yes" ? handler(name) : null)}
        winGlow={winGlow}
        thinking={thinking}
      >
        <StyledInner>
          <img src={iconURL} alt="icon" />
        </StyledInner>
      </StyledOutter>
    </StyledToken>
  )
}
export default Token
