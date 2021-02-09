//dependancies
import React, { useState } from "react"
import styled from "styled-components"

//styles
import { colors } from "../styles/colors"
import { typography } from "../styles/typography"

const StyledButton = styled.button`
  height: 50px;
  width: 90%;
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
  @keyframes showButton {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: showButton;
  animation-duration: 0.2s;
`

const Button = props => {
  return <StyledButton onClick={props.reset}>Play Again</StyledButton>
}

export default Button
