import React, { useState } from "react"
import styled from "styled-components"
import Triangle from "../../images/bg-triangle.svg"
import Token from "./gameToken"

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
`

const StyledTriangleSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
const Stage1 = props => {
  return (
    <StyledGameContainer>
      <StyledTriangleSpan>
        <Triangle />
      </StyledTriangleSpan>
      <TokenContainerTop>
        <Token
          name={tokenData[0].name}
          image={tokenData[0].iconURL}
          gradient={tokenData[0].gradient}
          shadow={tokenData[0].shadow}
          handler={props.handler}
          clickable="yes"
        />
        <Token
          name={tokenData[1].name}
          image={tokenData[1].iconURL}
          gradient={tokenData[1].gradient}
          shadow={tokenData[1].shadow}
          handler={props.handler}
          clickable="yes"
        />
      </TokenContainerTop>
      <TokenContainerBottom>
        <Token
          name={tokenData[2].name}
          image={tokenData[2].iconURL}
          gradient={tokenData[2].gradient}
          shadow={tokenData[2].shadow}
          handler={props.handler}
          clickable="yes"
        />
      </TokenContainerBottom>
    </StyledGameContainer>
  )
}

export default Stage1
