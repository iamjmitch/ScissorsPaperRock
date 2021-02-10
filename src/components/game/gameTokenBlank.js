//dependancies
import React from "react"
import styled from "styled-components"

//styles

const StyledToken = styled.div`
  z-index: 100;
  transition: 0.5s linear;
  opacity: ${props => (props.thinking ? 1 : 0)};
`
const StyledOutter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000001f;
  width: 199px;
  height: 199px;
  margin: 13px 0;
  border-radius: 50%;
`

const BlankToken = ({ thinking }) => {
  return (
    <StyledToken thinking={thinking}>
      <StyledOutter></StyledOutter>
    </StyledToken>
  )
}
export default BlankToken
