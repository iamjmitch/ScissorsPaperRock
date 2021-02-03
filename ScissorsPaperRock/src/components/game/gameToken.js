import React from "react"
import styled from "styled-components"
import { colors } from "../styles/colors"

const Rock = "./static/icon-rock.svg"
const Scissors = "./static/icon-scissors.svg"
const Paper = "./static/icon-paper.svg"

const StyledToken = styled.div``

const StyledOutter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  width: 225px;
  height: 225px;
  border-radius: 50%;
`
const StyledInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  box-shadow: inset 0px 6px 0px 0px #b9bed2;
  img {
    width: 40%;
    height: auto;
  }
`

const Token = props => {
  console.log(props.image)
  return (
    <StyledToken>
      <StyledOutter bg={`colors.${props.icon}`}>
        <StyledInner>
          <img src={props.image} />
        </StyledInner>
      </StyledOutter>
    </StyledToken>
  )
}
export default Token
