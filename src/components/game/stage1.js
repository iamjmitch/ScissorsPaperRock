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

  width: 90%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin-top: 100px;
  transform: scale(${props => props.scale});

  @media screen and (max-height: 1200px) {
    margin-top: 150px;
  }

  @media screen and (max-height: 1000px) {
    margin-top: 130px;
  }
  @media screen and (max-height: 800px) {
    margin-top: 75px;
  }
  @media screen and (max-height: 700px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 0px;
  }
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
const Stage1 = ({ handler, loadingHandler }) => {
  const [scale, setScale] = useState(1)

  if (typeof window !== "undefined") {
    useEffect(() => {
      var dynamicScale = Math.min(
        window.innerWidth / 800,
        window.innerHeight / 1000,
        window.outerWidth / 800,
        window.outerHeight / 1000
      )
      console.log(window.innerWidth)
      console.log(window.innerHeight)
      if (dynamicScale < 1) {
        setScale(dynamicScale + 0.1)
        loadingHandler(false)
      }
    }, [window.outerWidth, window.outerHeight])
  }
  return (
    <StyledGameContainer scale={scale}>
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
