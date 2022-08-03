// global variables for available choices
let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let winners = {
    rock: {
        scissors: 'ROCK crushes SCISSORS',
        lizard: 'ROCK crushes LIZARD'
    },

    paper: {
        rock: 'PAPER covers ROCK',
        spock: 'PAPER disproves SPOCK'
    },

    scissors: {
        paper: 'SCISSORS cuts PAPER',
        lizard: 'SCISSORS decapitates LIZARD'
    },

    lizard: {
        spock: 'LIZARD poisons SPOCK',
        paper: 'LIZARD eats PAPER'
    },

    spock: {
        scissors: 'SPOCK smashes SCISSORS',
        rock: 'SPOCK vaporizes ROCK'
    }
};
 

// wair for the DOM to load content before running game
// get buttons and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){

            let playerChoice = this.getAttribute('data-type');

            game(playerChoice);
        })
    }
} );

/** 
 * this is the main function which runs the game
 * @param {string} playerChoice: the choice made by the Player
 */
function game(playerChoice) {

    resetZones();

    displayPlayerChoice(playerChoice);

    //  creates random choice for the computer
    let randomNumber = Math.floor(Math.random() * 5); 
    let computerChoice = choices[randomNumber];   
    
}

/**
 * this function displays the choice made by the player in the div
 * pairs up the choice buttons with the respective images
 * @param {string} playerChoice: the choice made by the Player
 */
function displayPlayerChoice(playerChoice) {
    
    let playerZone = document.getElementById('playerZone');
    let image = 'assets/images/' + playerChoice + '.png';
    let displayChoice = document.createElement('img');

    displayChoice.setAttribute('class', 'images');
    displayChoice.src = image;

    playerZone.appendChild(displayChoice);

}

/**
 * this function deletes the previously selected images
 */
function resetZones() {

    let replaceImage = document.getElementsByClassName('images');

    for (let i = 0; i < replaceImage.length; i++) {
        replaceImage[i].remove();
    }

}

