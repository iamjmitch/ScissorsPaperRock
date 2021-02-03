import React, { useState } from "react"
import styled from "styled-components"
import Triangle from "../../images/bg-triangle.svg"
import Token from "./gameToken"

const Rock = "./static/icon-rock.svg"
const Scissors = "./static/icon-scissors.svg"
const Paper = "./static/icon-paper.svg"

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
`

const StyledTriangleSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const GameContainer = () => {
  return (
    <StyledGameContainer>
      <StyledTriangleSpan>
        <Triangle />
      </StyledTriangleSpan>
      <Token image={Rock} />
      <Token image={Paper} />
      <Token image={Scissors} />
    </StyledGameContainer>
  )
}

export default GameContainer
