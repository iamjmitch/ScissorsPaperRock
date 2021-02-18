//--dependancies--
import React from "react"

//--functions and data --
import winnerChecker from "./winnerChecker"

const ScoreHandlerFunction = (
  user,
  comp,
  incFunction,
  decFunction,
  endResultFunction,
  winnerFunction
) => {
  if (user !== "" && typeof comp !== "undefined") {
    var result = winnerChecker(user, comp)
    switch (result) {
      case "win":
        setTimeout(() => incFunction(), 3000)
        endResultFunction("You win")
        winnerFunction("player")
        break
      case "loose":
        endResultFunction("You lose")
        setTimeout(() => decFunction(), 3000)
        winnerFunction("computer")
        break
      case "draw":
        endResultFunction("It's a tie")
        winnerFunction("tie")
        break
      default:
        console.log("An error has occured")
        break
    }
  }
}

export default ScoreHandlerFunction
