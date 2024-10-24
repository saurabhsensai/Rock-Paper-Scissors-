const options = ['rock', 'paper', 'scissor'];
let humanScore  = 0;
let computerScore = 0;
function getComputerChoice(){
    const computerguess = options[Math.floor(Math.random() * options.length)];
    return computerguess

}

function getHumanChoice(){
    let choice = prompt("Please Choose your choice: Rock, Paper, Scissor");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("There is Tie");
    } else if (humanChoice === 'rock' && computerChoice === 'scissor'){
        console.log("You win, Rock beats Scissor ");
        humanScore++;   
    } else if(humanChoice === 'scissor' && computerChoice === 'paper'){
        console.log("You win, Scissor beats Paper ");
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log("You win, Paper beats rock");
        humanScore++;
    }else{
        console.log("Computer Wins " + computerChoice + " Beats " + humanChoice);
        computerChoice++;
    }
}

function playGame(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
}

for (let i = 0 ; i <= 4; i++){
    playGame();
}

console.log("Your Score: " + humanScore);
console.log("Computer Score: "+ computerScore);
