//dependancies
import React from "react"
import styled from "styled-components"

//styles
import { colors } from "../styles/colors"
import { typography } from "../styles/typography"

const StyledScoreboard = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  width: 170px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledScoreHeading = styled.h1`
  color: ${colors.scoreText};
  font-family: ${typography.font};
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: ${typography.weightBold};
`

const StyledScore = styled.h2`
  color: ${colors.darkText};
  font-family: ${typography.font};
  letter-spacing: 2px;
  font-size: 70px;
  line-height: 70px;
`

const Scoreboard = ({ score }) => {
  return (
    <StyledScoreboard>
      <StyledScoreHeading>SCORE</StyledScoreHeading>
      <StyledScore>{score}</StyledScore>
    </StyledScoreboard>
  )
}

export default Scoreboard
