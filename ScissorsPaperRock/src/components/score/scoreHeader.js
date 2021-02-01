import React from "react"
import styled from "styled-components"
import Logo from "../../images/logo.svg"
import { colors } from "../styles/colors"

const StyledHeader = styled.div`
  width: 90%;
  max-width: 900px;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding: 25px;
  flex-direction: row;
  border: 4px solid ${props => `${props.outline}`};
  border-radius: 20px;
`

const Header = () => {
  console.log(colors)
  return (
    <StyledHeader outline={colors.headerOutline}>
      <Logo />
    </StyledHeader>
  )
}

export default Header
