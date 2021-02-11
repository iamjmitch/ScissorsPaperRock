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
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
  transform: scale(${props => props.scale});
`

const StyledTriangleSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes showTriangle {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: showTriangle;
  animation-duration: 0.9s;
`
const TokenContainerTop = styled.div`
  width: 550px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`
const TokenContainerBottom = styled.div`
  transform: translateY(30px);
  width: 550px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`
const Stage1 = ({ handler }) => {
  //default for if window not detected (i.e during gatsby build)
  let stageOne = createRef()
  const [scale, SetScale] = useState(1)
  useEffect(() => {
    if (typeof window !== `undefined`) {
      var calculation = Math.min(
        window.innerWidth / 1440,
        window.innerHeight / 500
      )
      if (calculation < 1) {
        SetScale(calculation + 0.2)
      }
    }
  }, [stageOne])

  return (
    <StyledGameContainer ref={stageOne} scale={scale}>
      <StyledTriangleSpan>
        <img src="./bg-triangle.svg" alt="triangle - visual only" />
      </StyledTriangleSpan>
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
