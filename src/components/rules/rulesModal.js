//--dependancies--
import React from "react"
import styled from "styled-components"

//--styles--
import { colors } from "../styles/colors"
import { typography } from "../styles/typography"

//--assets--
import RulesImage from "../../images/image-rules.svg"
import Close from "../../images/icon-close.svg"

//--styled-components--
const BG = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0000009e;
  position: absolute;
  display: ${props => (props.show ? "block" : "none")};
  z-index: 1000;
  @keyframes showModal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: showModal;
  animation-duration: 0.5s;
`
const StyledModal = styled.div`
  background: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 29px 30px;

  border-radius: 8px;
  svg {
    margin: 30px 18px 0 18px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${typography.font};
  color: ${colors.darkText};
  font-size: 32px;
  font-weight: ${typography.weightBold};
  padding-bottom: 15px;
  margin: 0 1px;
  letter-spacing: -0.1px;
  svg {
    margin: 0;
    &:hover {
      cursor: pointer;
    }
    &:hover path {
      fill: black;
    }
  }
`

const Modal = ({ show, toggle, windowWidth }) => {
  return (
    <BG
      id="back"
      show={show}
      //if user clicks on dark background, the modal will hide. wont hide when clicking on the white area
      onClick={e => (e.target.id === "back" ? toggle() : "")}
    >
      <StyledModal>
        <StyledDiv>
          RULES
          {windowWidth > 500 && <Close className="mobile" onClick={toggle} />}
        </StyledDiv>
        <RulesImage />
        {windowWidth < 500 && <Close className="mobile" onClick={toggle} />}
      </StyledModal>
    </BG>
  )
}

export default Modal
