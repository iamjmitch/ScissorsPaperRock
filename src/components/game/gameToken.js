//dependancies
import React from "react"
import styled from "styled-components"

//styles
import { colors } from "../styles/colors"

const StyledToken = styled.div`
  z-index: 100;
  transition: 0.5s linear;
`

const StyledOutter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.gradient};
  width: 225px;
  height: 225px;
  border-radius: 50%;
  box-shadow: ${props => props.shadow};
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

const Token = props => {
  return (
    <StyledToken>
      <StyledOutter
        gradient={props.gradient}
        shadow={props.shadow}
        clickable={props.clickable}
        onClick={() =>
          props.clickable === "yes" ? props.handler(props.name) : null
        }
      >
        <StyledInner>
          <img src={props.image} />
        </StyledInner>
      </StyledOutter>
    </StyledToken>
  )
}
export default Token
