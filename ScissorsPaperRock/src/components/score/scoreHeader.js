import React from "react"
import styled from "styled-components"

import StyledScoreboard from "../score/scoreBox"
import Logo from "../../images/logo.svg"
import { colors } from "../styles/colors"

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
`

const Header = () => {
  console.log(colors)
  return (
    <StyledHeader outline={colors.headerOutline}>
      <Logo />
      <StyledScoreboard />
    </StyledHeader>
  )
}

export default Header
