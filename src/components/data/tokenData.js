import { colors } from "../styles/colors"

const shadowBoxSettings = "0px 10px 0px 0px "

export const tokenData = [
  {
    name: "paper",
    iconURL: "./static/icon-paper.svg",
    gradient: colors.paper,
    shadow: shadowBoxSettings + "#2945c3",
  },
  {
    name: "scissors",
    iconURL: "./static/icon-scissors.svg",
    gradient: colors.scissors,
    shadow: shadowBoxSettings + "#c76c1b",
  },
  {
    name: "rock",
    iconURL: "./static/icon-rock.svg",
    gradient: colors.rock,
    shadow: shadowBoxSettings + "#9d1634",
  },
]