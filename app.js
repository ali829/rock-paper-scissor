// lets do it
let choiceList = ["Rock", "Paper", "Scissors"];
// we will get the computer choice in this function
let getComputerChoice = () => {
  return Math.floor(Math.random() * 3);
};

// decide who win
let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "it's tie";
  } else {
    if (playerSelection === 0) {
      if (computerSelection === 1) {
        return "computer win!!";
      } else {
        return "player win!!";
      }
    } else if (playerSelection === 1) {
      if (computerSelection === 0) {
        return "player win!!";
      } else {
        return "computer win!!";
      }
    } else if (playerSelection === 2) {
      if (computerSelection === 0) {
        return "computer win!!";
      } else {
        return "player win!!";
      }
    }
  }
};

function game() {
  let playerScore = 0;
  let ComputerScore = 0;

  for (let index = 0; index < 5; index++) {
    let computerSelection = getComputerChoice();
    let getUserChoice = prompt(
      `choose your play between 1:${choiceList[0]} , 2:${choiceList[1]} and 3:${choiceList[2]}`
    );
    console.log("player  :", choiceList[getUserChoice]);
    console.log("computer :", choiceList[computerSelection]);
    let roundResult = playRound(parseInt(getUserChoice), computerSelection);
    console.log(roundResult);

    if (roundResult.toLocaleLowerCase().includes("player")) {
      playerScore++;
    } else if (roundResult.toLocaleLowerCase().includes("computer")) {
      ComputerScore++;
    }
    console.log(`player: ${playerScore} - ${ComputerScore} : computer`);
  }

  if (playerScore > ComputerScore) {
    console.log(`player: ${playerScore} - ${ComputerScore} : computer`);
    console.log("player won the game");
  } else if (playerScore < ComputerScore) {
    console.log(`player: ${playerScore} - ${ComputerScore} : computer`);
    console.log("computer won the game");
  } else {
    console.log(`player: ${playerScore} - ${ComputerScore} : computer`);
    console.log("It's a tie");
  }
}

game();
