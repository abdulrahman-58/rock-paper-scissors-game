#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "playerOne",
        type: "list",
        message: "player one select: ",
        choices: ["Rock", "Paper", "Scissors"]
    }, {
        name: "playerTwo",
        type: "list",
        message: "player two select: ",
        choices: ["Rock", "Paper", "Scissors"]
    }]);
if (answer.playerOne === answer.playerTwo) {
    console.log("It's a tie");
}
else if ((answer.playerOne === "Rock" && answer.playerTwo === "Scissors") ||
    (answer.playerOne === "Scissors" && answer.playerTwo === "Paper") ||
    (answer.playerOne === "Paper" && answer.playerTwo === "Rock")) {
    console.log("Player 1 wins!");
}
else {
    console.log("Player 2 wins!");
}
