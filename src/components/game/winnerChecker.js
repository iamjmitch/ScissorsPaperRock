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
        break
      case "rock":
        if (computer === "rock") {
          return "draw"
        } else if (computer === "paper") {
          return "loose"
        } else if (computer === "scissors") {
          return "win"
        }
        break
      case "paper":
        if (computer === "paper") {
          return "draw"
        } else if (computer === "scissors") {
          return "loose"
        } else if (computer === "rock") {
          return "win"
        }
        break
      default:
        console.log("An error has occured")
    }
  }
}

export default winnerChecker
