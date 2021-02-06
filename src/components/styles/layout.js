//dependancies
import React, { useState } from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/globalStyles"

//components
import Header from "../score/scoreHeader"
import Button from "../rules/rulesButton"
import Modal from "../rules/rulesModal"
import Stage1 from "../game/stage1"
import Stage2 from "../game/stage2"
import SEO from "../seo"

const Background = styled.div`
  position: relative;
  background: radial-gradient(
    circle,
    rgba(31, 55, 86, 1) 0%,
    rgba(20, 21, 48, 1) 100%
  );
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`

const StyledContainer = styled.div`
  width: 1366px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Main = props => {
  //modal popup controller
  const [showModal, setShowModal] = useState(false)
  //score keeper
  const [score, setScore] = useState(0)
  //has the user made a section
  const [userSelectionMade, setUserSelectionMade] = useState(false)
  //users selection
  const [userSelection, setUserSelection] = useState("")
  //computers selection
  const [computerSelection, setComputerSelection] = useState("")

  //handles the users selection and save name of their choice to state
  const userSelectionHandler = selection => {
    setUserSelection(selection)
    setUserSelectionMade(true)
  }

  // increases player score apon winning
  const increaseScore = () => {
    setScore(score + 1)
  }

  //toggles states to restart game. does not clear score
  const playAgain = () => {
    setUserSelectionMade(false)
    setUserSelection("")
    setComputerSelection("")
  }

  //handles visability of rules modal
  const handleShowRules = () => {
    if (showModal) {
      setShowModal(false)
    } else {
      setShowModal(true)
    }
  }
  return (
    <Background {...props}>
      <GlobalStyle />
      <SEO />
      <StyledContainer>
        <Header score={score} />
        {userSelectionMade === false && (
          <Stage1 handler={userSelectionHandler} />
        )}
        {userSelectionMade === true && (
          <Stage2
            userSelection={userSelection}
            computerSelection={computerSelection}
            increase={increaseScore}
            reset={playAgain}
          />
        )}
      </StyledContainer>
      <Button toggle={handleShowRules} />
      <Modal show={showModal} toggle={handleShowRules} />
    </Background>
  )
}

export default Main