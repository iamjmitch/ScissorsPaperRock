import React, { useState } from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/globalStyles"

import Header from "../score/scoreHeader"
import Button from "../rules/rulesButton"
import Modal from "../rules/rulesModal"
import GameContainer from "../game/gameMain"

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
  height: 100vh;
`

const Main = props => {
  const [showModal, setShowModal] = useState(false)

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
      <Header />
      <GameContainer />
      <Button toggle={handleShowRules} />
      <Modal show={showModal} toggle={handleShowRules} />
    </Background>
  )
}

export default Main
