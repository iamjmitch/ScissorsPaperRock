//dependancies
import React from "react"
import styled from "styled-components"

//styles
import { colors } from "../styles/colors"

//assets
import Logo from "../../images/logo.svg"

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
`

const Header = ({ score }) => {
  return (
    <StyledHeader outline={colors.headerOutline}>
      <Logo />
      <StyledScoreboard score={score} />
    </StyledHeader>
  )
}

export default Header
