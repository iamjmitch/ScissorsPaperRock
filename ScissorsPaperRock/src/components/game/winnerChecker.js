import React from "react"
const winnerChecker = (player, computer) => {
  if (typeof computer !== "undefined") {
    switch (player) {
      case "scissors":
        if (computer === "scissors") {
          return "draw"
        } else if (computer === "rock") {
          return "loose"
        } else if (computer === "paper") {
          return "win"
        }
      case "rock":
        if (computer === "rock") {
          return "draw"
        } else if (computer === "paper") {
          return "loose"
        } else if (computer === "scissors") {
          return "win"
        }
      case "paper":
        if (computer === "paper") {
          return "draw"
        } else if (computer === "scissors") {
          return "loose"
        } else if (computer === "rock") {
          return "win"
        }
    }
  }
}

export default winnerChecker
