/* For the intial portion of the project, log everything to the
   console. */

// Will be played against the computer










// Begin with function getComputerChoice()

let choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    
    // Randomly returns either 'Rock', 'Paper', or 'Scissors'
    
    // code for random number between 0 and 2 would be Math.floor(Math.random() * 3);
    
    return choices[Math.floor(Math.random() * 3)];
    
    // We will use this function in the game to make the computer's play
    
}

// Write a function called playRound that plays a single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
    
    // The function should take two parameters
    
    // First parameter is playerSelection
    
    // Second is computerSelection
    
    /* Return a string that declares the winner of the round
    like so 'You lose! Paper beats Rock' */
    
    // Make your function's playerSelection parameter case-insensitive
    
    // For case insensitivity, I could toLowerCase the string before comparing
    
    // Return the results, not console.log
    
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors';
    } else {
        return 'tie game!';
    }
    
}

// Write a new function called game()

function game() {

    /* call the playRound function inside of this one to play a 5 round
    game that keeps score and reports a winner or loser at the end. */
    
    // use loops to handle the rounds

    let result;
    let myScore = 0;
    let computerScore = 0;

    let winCondition = /win/;
    let loseCondition = /lose/;
    let tieCondition = /tie/;

    for (let i = 0; i < 5; i++) {
        result = playRound(prompt('enter rock, paper, or scissors'));

        if (winCondition.test(result)) {
            myScore++;
            computerScore--;
        } else if (loseCondition.test(result)) {
            myScore--;
            computerScore++;
        } else if (tieCondition.test(result)) {
            myScore;
            computerScore;
        } else {
            prompt('please enter rock, paper, or scissors correctly!');
    }

        console.log(`Your score is ${myScore}, the opponent's score is ${computerScore}`);

    }

    if (myScore > computerScore) {
        return `Your score is ${myScore}, the opponent's score is ${computerScore}...You Win!`;
    } else if (myScore < computerScore) {
        return `Your score is ${myScore}, the opponent's score is ${computerScore}...You Lose!`;
    } else {
        return `Tie game!`;
    }
    
}