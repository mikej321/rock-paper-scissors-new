/* For the intial portion of the project, log everything to the
   console. */

// Will be played against the computer









/* call the playRound function inside of this one to play a 5 round
game that keeps score and reports a winner or loser at the end. */

// use loops to handle the rounds

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
        return 'Tie game!';
    }
        
}

// Write a new function called game()