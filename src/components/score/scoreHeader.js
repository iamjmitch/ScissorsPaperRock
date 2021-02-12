//dependancies
import React from "react"
import styled from "styled-components"

//styles
import { colors } from "../styles/colors"

//assets

//components
import StyledScoreboard from "../score/scoreBox"

const StyledHeader = styled.div`
  width: 90%;
  max-width: 800px;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding: 20px 25px;
  flex-direction: row;
  justify-content: space-between;
  border: 4px solid ${props => `${props.outline}`};
  border-radius: 20px;
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    margin-bottom: 0px;
    img {
      width: 45%;
      max-width: 165px;
      height: auto;
    }
  }
`

const Header = ({ score }) => {
  return (
    <StyledHeader outline={colors.headerOutline}>
      <img src="./logo.svg" alt logo />
      <StyledScoreboard score={score} />
    </StyledHeader>
  )
}

export default Header
