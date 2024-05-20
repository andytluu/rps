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
            console.log("You lose! Paper beats rock");
            return computerWin = 1;
        }
        else if(compChoice == "scissors"){
            console.log("You win! Rock beats scissors");
            return computerWin= 0;
        }
        else{
            console.log("It is a tie!");
            return computerWin = 2;
        }
    }

    if (hChoice == "paper"){
        if(compChoice == "scissors"){
            console.log("You lose! Scissors beats paper");
            return computerWin = 1;
        }
        else if(compChoice == "rock"){
            console.log("You win! Paper beats rock");
            return computerWin = 0;
        }
        else{
            console.log("It is a tie!");
            return computerWin = 2;
        }
    }

    if (hChoice == "scissors"){
        if(compChoice == "rock"){
            console.log("You lose! Rock beats scissors");
            return computerWin = 1;
        }
        else if(compChoice == "paper"){
            console.log("You win! Scissors beats paper");
            return computerWin = 0;
        }
        else{
            console.log("It is a tie!");
            return computerWin = 2;
        }
    }
}

function playGame(){
    let humanScore = 0;
    let compScore = 0;

    for(let i = 0; i<5;i++){
        const hSelect = getHumanChoice();
        const cSelect = getComputerChoice();
        console.log(hSelect);
        console.log(cSelect);
        let score = playRound(hSelect,cSelect,humanScore,compScore);
        if(score == 1){
            compScore += 1;
        }
        else if(score == 0){
            humanScore += 1;
        }
        console.log(humanScore);
        console.log(compScore);
    }
}

playGame();