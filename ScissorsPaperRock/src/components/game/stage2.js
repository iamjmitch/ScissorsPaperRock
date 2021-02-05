import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Triangle from "../../images/bg-triangle.svg"
import Token from "./gameToken"
import { typography } from "../styles/typography"
import { colors } from "../styles/colors"

import { tokenData } from "../data/tokenData"
import winnerChecker from "./winnerChecker"

const StyledGameContainer = styled.div`
  color: red;
  align-self: center;
  padding-top: 50px;
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
`

const UserSelection = styled.div`
  width: 50%;
  font-family: ${typography.font};
  font-weight: ${typography.weightBold};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  h3 {
    margin-bottom: 40px;
  }
`
const ComputerSelection = styled.div`
  width: 50%;
  font-family: ${typography.font};
  font-weight: ${typography.weightBold};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  h3 {
    margin-bottom: 40px;
  }
`

const Stage2 = props => {
  const [userSelected, setUserSelected] = useState("")
  const [computerSelected, setComputerSelected] = useState("")
  const [endResult, setEndResult] = useState("working")

  useEffect(() => {
    if (userSelected === "") {
      for (var i = 0; i < tokenData.length; i++) {
        if (tokenData[i].name == props.userSelection) {
          setUserSelected(tokenData[i])
        }
      }
    }
    //will randomly select an object from the token data array as the computers choice
    if (userSelected != "") {
      setComputerSelected(
        tokenData[Math.floor(Math.random() * tokenData.length)]
      )
    }
  }, [userSelected])

  useEffect(() => {
    scoreHandler(userSelected.name, computerSelected.name)
  }, [userSelected, computerSelected])

  const scoreHandler = (user, comp) => {
    if (userSelected != "" && typeof comp !== "undefined") {
      var result = winnerChecker(user, comp)
      switch (result) {
        case "win":
          props.increase()

          setEndResult("You Win")
          break
        case "loose":
          setEndResult("You Loose")
          break
        case "draw":
          setEndResult("Its A Draw")
          break
        default:
          setEndResult("something fucked up")
          break
      }
    }
  }

  return (
    <StyledGameContainer>
      <UserSelection>
        <h3>{`YOU PICK ${props.userSelection}`}</h3>
        <Token
          name={userSelected.name}
          image={userSelected.iconURL}
          gradient={userSelected.gradient}
          shadow={userSelected.shadow}
          clickable="no"
        />
      </UserSelection>
      {endResult}
      <ComputerSelection>
        <h3>{`THE HOUSE PICKED ${computerSelected.name}`}</h3>
        <Token
          name={computerSelected.name}
          image={computerSelected.iconURL}
          gradient={computerSelected.gradient}
          shadow={computerSelected.shadow}
          clickable="no"
        />
      </ComputerSelection>
    </StyledGameContainer>
  )
}

export default Stage2
