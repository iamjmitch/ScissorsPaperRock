//dependancies
import React, { useState, useEffect } from "react"
import styled from "styled-components"

//styles
import { typography } from "../styles/typography"
import { colors } from "../styles/colors"

//components
import Button from "./playAgainButton"

const StyledDiv = styled.div`
  width: ${props => (props.windowWidth > 800 ? "30%" : "100%")};
  font-family: ${typography.font};
  text-transform: uppercase;
  color: ${colors.white};
  font-size: 70px;
  font-weight: ${typography.weightBold};
  letter-spacing: 2px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @keyframes showEnd {
    from {
      width: 0%;
    }
    to {
      width: 30%;
    }
  }
  animation-name: showEnd;
  animation-duration: 0.9s;
  overflow: hidden;
  h5 {
    @keyframes showResult {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation-name: showResult;
    animation-duration: 0.2s;
  }
  @media screen and (max-height: 720px) {
    margin-top: -50px;
    font-size: 50px;
  }
  @media screen and (max-height: 720px) {
    margin-top: -50px;
    font-size: 40px;
  }
`

const EndGame = ({ endResult, gameOver, reset, windowWidth }) => {
  const [showS, setShowS] = useState(false)

  const handleShow = () => {
    setTimeout(() => setShowS(true), 900)
  }

  useEffect(() => handleShow(), [])
  return (
    <StyledDiv windowWidth={windowWidth}>
      {showS && <h5>{endResult}</h5>}
      {showS && gameOver === true && <Button reset={reset} />}
    </StyledDiv>
  )
}

export default EndGame
