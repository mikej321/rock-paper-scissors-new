/* For the intial portion of the project, log everything to the
console. */

// Will be played against the computer

// May have to move the event listener over to the playRound function as it was originally


const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
let playerResult = document.querySelector('#playerScore');
let computerResult = document.querySelector('#computerScore');

console.log(playerResult, computerResult);


let startGame = Array.from(buttons).forEach((button) => {
    button.addEventListener('click', game);
})





// Add a div for displaying results and change all of your console.logs into DOM methods.

const div = document.createElement('div')
div.classList.add('results');
const selections = document.querySelector('.selection-container');
selections.insertAdjacentElement('afterend', div);



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

// Write a new function called game()
let myTally = 0;
let computerTally = 0;
let round = 0;

function game() {
    
    /* call the playRound function inside of this one to play a 5 round
    game that keeps score and reports a winner or loser at the end. */
    
    // use loops to handle the rounds
    
    // remove the logic that plays five rounds
    
    const roundElement = document.querySelector('.round');
    
    let winCondition = /win/;
    let loseCondition = /lose/;
    let tieCondition = /tie/;
    
    /* Create three buttons, one for each selection. Add an event listener
    to the buttons that call your playRound function with the correct
    playerSelection every time a button is clicked. (You can keep the console.log's
    for this step) */
    
        playRound(this.value);

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

        playerResult.textContent = myTally;
        computerResult.textContent = computerTally;
        roundElement.textContent = round;
    
        if (round == 5 && myTally > computerTally) {
            const gameOver = document.createElement('div');
            gameOver.classList.add('gameOver');
            gameOver.textContent = 'You\'re Winner!';
            div.insertAdjacentElement('afterend', gameOver);
        } else if (round == 5 && myTally < computerTally) {
            const gameOver = document.createElement('div');
            gameOver.classList.add('gameOver');
            gameOver.textContent = 'You\'re Loser!';
            div.insertAdjacentElement('afterend', gameOver);
        } else if (round == 5 && myTally == computerTally) {
            const gameOver = document.createElement('div');
            gameOver.classList.add('gameOver');
            gameOver.textContent = 'It\'s a tie!';
            div.insertAdjacentElement('afterend', gameOver);
        }
    // for (let i = 0; i < 5; i++) {
    //     result = playRound(prompt('enter rock, paper, or scissors'));

    //     if (winCondition.test(result)) {
    //         myScore++;
    //         computerScore--;
    //     } else if (loseCondition.test(result)) {
    //         myScore--;
    //         computerScore++;
    //     } else if (tieCondition.test(result)) {
    //         myScore;
    //         computerScore;
    //     } else {
    //         prompt('please enter rock, paper, or scissors correctly!');
    // }

    //     console.log(`Your score is ${myScore}, the opponent's score is ${computerScore}`);

    // }

    
    
}

// player should be able to play by clicking buttons instead of typing




// Display the running score, and announce a winner of the game once one player reaches 5 points

/* You will likely have to refactor (rework/rewrite) your original code to make it
   work for this. That's OK! */

   


   /* When a forEach access a function via a function call, you can 
      have access to this keyword inside of the function that the 
      forEach has called. */