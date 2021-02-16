//dependancies
import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import ScaleProvider from "../global/contextScreen"

//styles
import { typography } from "../styles/typography"
import { colors } from "../styles/colors"

//components
import Token from "./gameToken"
import BlankToken from "./gameTokenBlank"
import EndGame from "./endGameHandle"
import ScoreHandlerFunction from "./scoreHandler"

//functions and data
import { tokenData } from "../data/tokenData"

const StyledGameContainer = styled.div`
  margin: 0 auto;
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
  transform: scale(${props => props.scale});
  @media screen and (max-height: 1000px) {
    padding-top: 0px;
  }
  @media screen and (max-height: 900px) {
    margin-bottom: 0;
  }
  @media screen and (max-height: 800px) {
    padding-top: 0px;
    margin-top: -20px;
    margin-bottom: 0;
  }
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

const Stage2 = ({ userSelection, increase, decrease, reset, windowWidth }) => {
  const [userSelected, setUserSelected] = useState("")
  const [computerSelected, setComputerSelected] = useState("")
  const [endResult, setEndResult] = useState("working")
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState("")
  const [thinking, setThinking] = useState(true)
  const scale = useContext(ScaleProvider)

  //grabs the users selection and loads all the relavent sprite data into state
  useEffect(() => {
    if (userSelected === "") {
      for (var i = 0; i < tokenData.length; i++) {
        if (tokenData[i].name === userSelection) {
          setUserSelected(tokenData[i])
        }
      }
    }

    //will randomly select an object from the token data array as the computers choice
    if (userSelected !== "") {
      setComputerSelected(
        tokenData[Math.floor(Math.random() * tokenData.length)]
      )
    }
  }, [userSelected])

  //delays the display of computer selection. purely cosmetic
  useEffect(() => {
    setTimeout(() => setThinking(false), 1500)
  }, [])

  //detects when either the user or computer selection has changed
  useEffect(() => {
    scoreHandler(userSelected.name, computerSelected.name)
  }, [userSelected, computerSelected])

  //sends data to score handler for end game processing
  const scoreHandler = (user, comp) => {
    ScoreHandlerFunction(
      user,
      comp,
      increase,
      decrease,
      setEndResult,
      setWinner
    )
    setGameOver(true)
  }

  return (
    <div>
      <StyledGameContainer
        gameOver={gameOver}
        thinking={thinking}
        scale={scale}
      >
        <UserSelection thinking={thinking}>
          <h3>You Pick</h3>
          <Token
            {...userSelected}
            clickable="no"
            winGlow={winner === "player" || winner === "tie" ? true : false}
            thinking={thinking}
            player={true}
          />
        </UserSelection>
        {thinking === false && windowWidth > 800 && (
          <EndGame
            gameOver={gameOver}
            reset={reset}
            endResult={endResult}
            windowWidth={windowWidth}
          />
        )}
        <ComputerSelection thinking={thinking}>
          <h3>The House Picked</h3>
          {thinking === true ? (
            <BlankToken thinking={thinking} />
          ) : (
            <Token
              {...computerSelected}
              clickable="no"
              winGlow={winner === "computer" || winner === "tie" ? true : false}
              thinking={thinking}
            />
          )}
        </ComputerSelection>
      </StyledGameContainer>
      {thinking === false && windowWidth < 800 && (
        <EndGame
          gameOver={gameOver}
          reset={reset}
          endResult={endResult}
          windowWidth={windowWidth}
        />
      )}
    </div>
  )
}

export default Stage2
