//dependancies
import React, { useState, useEffect } from "react"
import styled from "styled-components"

//styles
import { typography } from "../styles/typography"
import { colors } from "../styles/colors"

//components
import Button from "./playAgainButton"

const StyledDiv = styled.div`
  width: 30%;
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
`

const EndGame = props => {
  const [showS, setShowS] = useState(false)

  const handleShow = () => {
    setTimeout(() => setShowS(true), 900)
  }

  useEffect(() => handleShow(), [])
  return (
    <StyledDiv>
      {showS && <h5>{props.endResult}</h5>}
      {showS && props.gameOver === true && <Button reset={props.reset} />}
    </StyledDiv>
  )
}

export default EndGame
