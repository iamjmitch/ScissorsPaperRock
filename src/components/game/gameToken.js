//dependancies
import React from "react"
import styled from "styled-components"

//styles
import { colors } from "../styles/colors"

const StyledToken = styled.div`
  z-index: 100;
  transition: 0.5s linear;
  @keyframes showToken {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: showToken;
  animation-duration: 0.9s;
`
const winGlowSettings =
  " 0px 0px 0px 40px #ffffff04, 0px 0px 0px 80px #ffffff04, 0px 0px 0px 130px #ffffff04;"

const StyledOutter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.gradient};
  width: 225px;
  height: 225px;
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
          <img src={iconURL} />
        </StyledInner>
      </StyledOutter>
    </StyledToken>
  )
}
export default Token
