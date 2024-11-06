const options = ['rock', 'paper', 'scissor'];
let humanScore  = 0;
let computerScore = 0;
function getComputerChoice(){
    const computerguess = options[Math.floor(Math.random() * options.length)];
    return computerguess

}

const result = document.querySelector("#result");

const content = document.createElement("h1");
content.classList.add("content");

const score = document.createElement("h2");
score.classList.add("score");

const final = document.createElement("h1");
final.classList.add("final");


const refresh = document.createElement("button");
refresh.textContent = "Replay!";

function getHumanChoice(){
    let choice = prompt("Please Choose your choice: Rock, Paper, Scissor");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        content.setAttribute("style", "color: black;");
        content.textContent = "There is Tie";
        score.textContent = "Human " + humanScore + " Computer " + computerScore;
    } else if (humanChoice === 'rock' && computerChoice === 'scissor'){
        content.setAttribute("style", "color: green;");
        content.textContent = "You win, Rock beats Scissor ";
        humanScore++;   
        score.textContent = "Human " + humanScore + " Computer " + computerScore;
    } else if(humanChoice === 'scissor' && computerChoice === 'paper'){
        content.setAttribute("style", "color: green;");
        content.textContent = "You win, Scissor beats Paper ";
        humanScore++;
        score.textContent = "Human " + humanScore + " Computer " + computerScore;
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        content.setAttribute("style", "color: green;");
        content.textContent = "You win, Paper beats rock";
        humanScore++;
        score.textContent = "Human " + humanScore + " Computer " + computerScore;
    }else{
        content.setAttribute("style", "color: red;");
        content.textContent = "Computer Wins " + computerChoice + " Beats " + humanChoice;
        computerScore++;
        score.textContent = "Human " + humanScore + " Computer " + computerScore;
    }

    if (humanScore === 5 || computerScore === 5){
        if (humanScore === 5 ){
            final.textContent = "Human You win, Congratulations";

        }else{
            final.textContent = "Bad Luck, Computer Wins...";
            
        }
        result.appendChild(refresh);


    }
}

result.appendChild(content);
result.appendChild(score);
result.appendChild(final);

refresh.addEventListener("click", () => {
    window.location.reload();
  });

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    let choice = "rock";
    let computerChoice = getComputerChoice();
    playRound(choice,computerChoice);

});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    let choice = "paper";
    let computerChoice = getComputerChoice();
    playRound(choice,computerChoice);

});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    let choice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(choice,computerChoice);

});
