function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1){
        return "rock";
    }
    else if (choice == 2){
        return "paper";
    }
    else if (choice == 3){
        return "scissors";
    }
}

// function getHumanChoice(){
//     return prompt("Enter your choice from rock/paper/scissors");
// }

let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound(humanChoice){
    computerChoice = getComputerChoice();
    let roundResult = document.querySelector(".roundResult");
    if (humanChoice.toLowerCase() == computerChoice){
        roundResult.textContent = "Oops! It's a tie";
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){
        roundResult.textContent = "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
        roundResult.textContent = "You Won! Rock beats Scissors";
        humanScore++;
    }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        roundResult.textContent = "You Won! Paper beats Rock";
        humanScore++;
    }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){
        roundResult.textContent = "You lose! Scissors beats Papers";
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){
        roundResult.textContent = "You lose! Rocks beats Scissors";
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
        roundResult.textContent = "You Won! Scissors beats Paper";
        humanScore++;
    }
    
    round++;
    if (round == 5){
        showWinner();
    }
}  

function showWinner(){
    let roundResult = document.querySelector(".roundResult");

    if (humanScore > computerScore) {
        roundResult.textContent = `🎉 You Won! ${humanScore} vs ${computerScore}`;
    } 
    else if (humanScore < computerScore) {
        roundResult.textContent = `😢 You Lost! ${computerScore} vs ${humanScore}`;
    } 
    else {
        roundResult.textContent = `😐 Tie Game! ${humanScore} vs ${computerScore}`;
    }
}

function playGame(){
    const rockBtn = document.querySelector("#rockbtn");
    const paperBtn = document.querySelector("#paperbtn");
    const scissorsBtn = document.querySelector("#scissorsbtn");

    rockBtn.addEventListener("click", () => playRound("rock"));
    paperBtn.addEventListener("click", () => playRound("paper"));
    scissorsBtn.addEventListener("click", ()=> playRound("scissors"));
}

playGame();