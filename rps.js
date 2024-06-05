function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    let computerChoice = "";
    switch(choice){
        case 0:
            computerChoice = "rock"; 
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

function getHumanChoice(){
    let choice = prompt("What is your choice?" );
    return choice;
}

function playRound(humanChoice, compChoice){
    let hChoice = humanChoice.toLowerCase();
    let computerWin = 0;
    if (hChoice == "rock"){
        if(compChoice == "paper"){
            message.textContent = "You lose! Paper beats rock";
            //console.log("You lose! Paper beats rock");
            return computerWin = 1;
        }
        else if(compChoice == "scissors"){
            message.textContent = "You win! Rock beats scissors";
            //console.log("You win! Rock beats scissors");
            return computerWin= 0;
        }
        else{
            message.textContent = "It is a tie!";
            //console.log("It is a tie!");
            return computerWin = 2;
        }
    }

    if (hChoice == "paper"){
        if(compChoice == "scissors"){
            message.textContent = "You lose! Scissors beats paper";
            //console.log("You lose! Scissors beats paper");
            return computerWin = 1;
        }
        else if(compChoice == "rock"){
            message.textContent = "You win! Paper beats rock";
            //console.log("You win! Paper beats rock");
            return computerWin = 0;
        }
        else{
            message.textContent = "It is a tie!";
            //console.log("It is a tie!");
            return computerWin = 2;
        }
    }

    if (hChoice == "scissors"){
        if(compChoice == "rock"){
            message.textContent = "You lose! Rock beats scissors";
           // console.log("You lose! Rock beats scissors");
            return computerWin = 1;
        }
        else if(compChoice == "paper"){
            message.textContent = "You win! Scissors beats paper";
           // console.log("You win! Scissors beats paper");
            return computerWin = 0;
        }
        else{
            message.textContent = "It is a tie!";
           // console.log("It is a tie!");
            return computerWin = 2;
        }
    }
}

function playGame(score){
    let humanScore = 0;
    let compScore = 0;

    //for(let i = 0; i<5;i++){
        //const hSelect = getHumanChoice();
        //const cSelect = getComputerChoice();
        //console.log(hSelect);
        //console.log(cSelect);
        //let score = playRound(hSelect,cSelect);
        if(score == 1){
            compScore += 1;
        }
        else if(score == 0){
            humanScore += 1;
        }
        console.log(humanScore);
        console.log(compScore);
    //}
}

function hOrCWin(humanScore,computerScore){
    if(computerScore === 5){
        hScore = 0;
        cScore = 0;
        return "Computer wins";
    }

    if(humanScore === 5){
        hScore = 0;
        cScore = 0;
        return "You win";
    }
}
let options = document.querySelector("#options");
let result = document.querySelector("#results");
let humanScore = document.querySelector("#human");
let computerScore = document.querySelector("#computer");
let winResult = document.querySelector("#win");
let message = document.querySelector("#message");
options.addEventListener("click",(event) => {
    let target = event.target;
    let score = 0;
    switch(target.id){
        case "rock":
            console.log("rock");
            score = playRound("rock",getComputerChoice());

            break;
        case "paper":
            console.log("paper");
            score = playRound("paper",getComputerChoice());

            break;
        case "scissors":
            console.log("scissors");
            score = playRound("scissors",getComputerChoice());

            break;
    }

    if(score == 1){
        cScore += 1;
    }
    else if(score == 0){
        hScore += 1;
    }
    
    humanScore.textContent = "Your Score: " + hScore.toString();
    computerScore.textContent = "Computer Score: " + cScore.toString();
    let win = hOrCWin(hScore,cScore);
    winResult.textContent = win;

});
let hScore = 0;
let cScore = 0;
/*
rock.addEventListener("click",playRound("rock"));
paper.addEventListener("click",playRound("paper"));
scissors.addEventListener("click",playRound("scissors"));*/
//playGame();