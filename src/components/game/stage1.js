//dependancies
import React, { createRef, useEffect, useState } from "react"
import styled from "styled-components"

//components
import Token from "./gameToken"

//functions and data
import { tokenData } from "../data/tokenData"

const StyledGameContainer = styled.div`
  color: red;
  align-self: center;
  padding-top: 50px;
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin: 50px 0;
  transform: scale(${props => props.scale});
  background: url("./bg-triangle.svg") no-repeat center center;
  @media screen and (max-width: 900px) {
    margin-top: 0;
  }
`

const TokenContainerTop = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: -100px;
`
const TokenContainerBottom = styled.div`
  transform: translateY(30px);
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`
const Stage1 = ({ handler }) => {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    if (typeof window !== "undefined") {
      var dynamicScale = Math.min(
        window.outerWidth / 800,
        window.outerHeight / 410
      )
      console.log(window.outerWidth)
      console.log(window.outerHeight)
      if (dynamicScale < 1) {
        setScale(dynamicScale)
      }
    }
  }, [])
  return (
    <StyledGameContainer scale={scale}>
      <TokenContainerTop>
        <Token {...tokenData[0]} handler={handler} clickable="yes" />
        <Token {...tokenData[1]} handler={handler} clickable="yes" />
      </TokenContainerTop>
      <TokenContainerBottom>
        <Token {...tokenData[2]} handler={handler} clickable="yes" />
      </TokenContainerBottom>
    </StyledGameContainer>
  )
}

export default Stage1
