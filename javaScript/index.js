// Global Variables Start

const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
let playerResult = document.querySelector('#playerScore');
let computerResult = document.querySelector('#computerScore');

const gameOver = document.querySelector('.gameOver');

const div = document.createElement('div')
div.classList.add('results');
const selections = document.querySelector('.selection-container');
selections.insertAdjacentElement('afterend', div);
let choices = ['rock', 'paper', 'scissors'];

let myTally = 0;
let computerTally = 0;
let round = 0;

// Global Variables End


// Event Listener that listens for a click and starts my game function

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', game);
})

// Function meant to grab a random choice between 'Rock, Paper, or Scissors';

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

// Function that compares the player's selection to the computer's and returns a string

function playRound(playerSelection, computerSelection) {
       
    computerSelection = getComputerChoice();
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {        
        div.textContent = 'You win! Rock beats Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        div.textContent = 'You lose! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        div.textContent = 'You win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        div.textContent = 'You lose! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        div.textContent = 'You win! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        div.textContent = 'You lose! Rock beats Scissors';
    } else {
        div.textContent = 'tie game!';
    }
}

// helper functions meant for resetting the game and text content

function reset() {
    myTally = 0;
    computerTally = 0;
    round = 0;
    Array.from(buttons).forEach((button) => {
        button.removeEventListener('click', game);
    })
}

function startGame() {
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', game);
    })
}

// The game function

function game() {
    const roundElement = document.querySelector('.round');
    
    // Regex's to test against the div's textContent
    let winCondition = /win/;
    let loseCondition = /lose/;
    let tieCondition = /tie/;

    // When the function begins, reset the text content

    if (round == 0) {
        gameOver.textContent = '';
    }
    
    // When playRound is called, grab the event buttons' value
    
    playRound(this.value);

    // Depending on the regex that matches, alter the tally counts and round

        if (winCondition.test(div.textContent)) {
            myTally += 1;
            computerTally -= 1;
            round += 1;
        } else if (loseCondition.test(div.textContent)) {
            myTally -= 1;
            computerTally += 1;
            round += 1;
        } else if (tieCondition.test(div.textContent)) {
            myTally;
            computerTally;
            round += 1;
        }

    // Update the results and round visually on the page

        playerResult.textContent = myTally;
        computerResult.textContent = computerTally;
        roundElement.textContent = round;

    // Doesn't check until the 5th round, gives the final message
    
        if (round == 5 && myTally > computerTally) {
            
            gameOver.textContent = 'You\'re Winner!';
            reset();
            startGame();
        } else if (round == 5 && myTally < computerTally) {
            
            gameOver.textContent = 'You\'re Loser!';
            reset();
            startGame();
        } else if (round == 5 && myTally == computerTally) {
            
            gameOver.textContent = 'It\'s a tie!';
            reset();
            startGame();
        }     
}




