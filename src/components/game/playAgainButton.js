//dependancies
import React from "react"
import styled from "styled-components"

//styles
import { colors } from "../styles/colors"
import { typography } from "../styles/typography"

const StyledButton = styled.button`
  height: 50px;
  width: 70%;
  max-width: 300px;
  background: ${colors.white};
  font-family: ${typography.font};
  text-transform: uppercase;
  color: #c7526a;
  font-size: 16px;
  font-weight: ${typography.weightBold};
  letter-spacing: 2px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 15px;
  animation-name: fadeIn;
  animation-duration: 0.2s;
  @media screen and (max-height: 620px) {
    height: auto;
    padding: 10px;
  }
`

const Button = ({ reset }) => {
  return <StyledButton onClick={reset}>Play Again</StyledButton>
}

export default Button
