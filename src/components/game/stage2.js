//dependancies
import React, { useState, useEffect } from "react"
import styled from "styled-components"

//styles
import { typography } from "../styles/typography"
import { colors } from "../styles/colors"

//components
import Token from "./gameToken"
import BlankToken from "./gameTokenBlank"
import EndGame from "./endGameHandle"

//functions and data
import { tokenData } from "../data/tokenData"
import winnerChecker from "./winnerChecker"

const StyledGameContainer = styled.div`
  color: red;
  align-self: center;
  padding-top: 50px;
  width: ${props => (props.thinking === true ? "auto" : "90%")};
  max-width: ${props => (props.gameOver ? "100%" : "800px")};
  transiton: max-width 3s linear;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
`

const UserSelection = styled.div`
  width: auto;
  min-width: 300px;
  font-family: ${typography.font};
  font-weight: ${typography.weightBold};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-size: 30px;
  h3 {
    margin-bottom: 40px;
    text-transform: uppercase;
    @keyframes showHeading {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation-name: showHeading;
    animation-duration: 0.9s;
  }
`
const ComputerSelection = styled.div`
  width: auto;
  min-width: 300px;
  font-family: ${typography.font};
  font-weight: ${typography.weightBold};
  font-size: 30px;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  h3 {
    margin-bottom: 40px;
    text-transform: uppercase;
    @keyframes showHeading {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation-name: showHeading;
    animation-duration: 0.9s;
  }
`

const Stage2 = props => {
  const [userSelected, setUserSelected] = useState("")
  const [computerSelected, setComputerSelected] = useState("")
  const [endResult, setEndResult] = useState("working")
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState("")
  const [thinking, setThinking] = useState(true)

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
    setTimeout(() => setThinking(false), 1500)
  }, [])

  useEffect(() => {
    scoreHandler(userSelected.name, computerSelected.name)
  }, [userSelected, computerSelected])

  const scoreHandler = (user, comp) => {
    if (userSelected != "" && typeof comp !== "undefined") {
      var result = winnerChecker(user, comp)
      switch (result) {
        case "win":
          setTimeout(() => props.increase(), 3000)
          setEndResult("You win")
          setWinner("player")
          break
        case "loose":
          setEndResult("You lose")
          setTimeout(() => props.decrease(), 3000)
          setWinner("computer")
          break
        case "draw":
          setEndResult("It's a tie")
          setWinner("tie")
          break
        default:
          console.log("An error has occured")
          break
      }
    }
    setGameOver(true)
  }

  return (
    <StyledGameContainer gameOver={gameOver} thinking={thinking}>
      <UserSelection thinking={thinking}>
        <h3>You Pick</h3>
        <Token
          name={userSelected.name}
          image={userSelected.iconURL}
          gradient={userSelected.gradient}
          shadow={userSelected.shadow}
          clickable="no"
          winGlow={winner === "player" || winner === "tie" ? true : false}
          thinking={thinking}
          player={true}
        />
      </UserSelection>
      {thinking === false && (
        <EndGame
          gameOver={gameOver}
          reset={props.reset}
          endResult={endResult}
        />
      )}
      <ComputerSelection thinking={thinking}>
        <h3>The House Picked</h3>
        {thinking === true ? (
          <BlankToken thinking={thinking} />
        ) : (
          <Token
            name={computerSelected.name}
            image={computerSelected.iconURL}
            gradient={computerSelected.gradient}
            shadow={computerSelected.shadow}
            clickable="no"
            winGlow={winner === "computer" || winner === "tie" ? true : false}
            thinking={thinking}
          />
        )}
      </ComputerSelection>
    </StyledGameContainer>
  )
}

export default Stage2
