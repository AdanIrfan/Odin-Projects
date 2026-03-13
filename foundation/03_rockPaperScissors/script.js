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

function getHumanChoice(){
    return prompt("Enter your choice from rock/paper/scissors");
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    if (humanChoice.toLowerCase() == computerChoice){
        console.log("Oops! It's a tie");
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
        console.log("You Won! Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        console.log("You Won! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Papers");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rocks beats Scissors");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
        console.log("You Won! Scissors beats Paper");
        humanScore++;
    }
}  



function playGame(){
    for (let i = 0; i<5 ;i++){
        console.log(`Round ${i}:`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    }
    console.log("After the Five Round competition");
    if(humanScore > computerScore){
        console.log(`You have Won with Scores: ${humanScore} > opponent's: ${computerScore} `);
    }
    else if (humanScore < computerScore){
        console.log(`You lost with a margin of ${computerScore - humanScore}`);
    }
    else if (humanScore == computerScore){
        console.log(`Tie Game! Opponent:${computerScore} || Yours:${humanScore}`);
    }
}

playGame();