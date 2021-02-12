//dependancies
import React from "react"
import styled from "styled-components"

//styles
import { colors } from "../styles/colors"
import { typography } from "../styles/typography"

const StyledButton = styled.div`
  position: absolute;
  bottom: 25px;
  right: 25px;
  max-width: 150px;
  margin: 10px auto;
  border: 3px solid ${colors.headerOutline};
  color: ${colors.white};
  padding: 10px 40px;
  font-family: ${typography.font};
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: ${colors.darkText};
  }

  @media screen and (max-width: 700px) {
    position: unset;
    bottom: unset;
    top: unset;
  }
`

const Button = ({ toggle }) => {
  return <StyledButton onClick={toggle}>RULES</StyledButton>
}

export default Button
