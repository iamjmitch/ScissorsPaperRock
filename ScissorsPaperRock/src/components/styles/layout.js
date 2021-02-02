import React, { useState } from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/globalStyles"

import Header from "../score/scoreHeader"
import Button from "../rules/rulesButton"
import Modal from "../rules/rulesModal"

const Background = styled.div`
  position: relative;
  background: radial-gradient(
    circle,
    rgba(31, 55, 86, 1) 0%,
    rgba(20, 21, 48, 1) 100%
  );
  display: flex;
  width: 100vw;
  height: 100vh;
`

const Main = props => {
  const [showModal, setShowModal] = useState(false)

  const handleShowRules = () => {
    console.log("running")
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
      <Button toggle={handleShowRules} />
      <Modal show={showModal} toggle={handleShowRules} />
    </Background>
  )
}

export default Main
