// wair for the DOM to load content before running game
// get buttons and add event listeneres to them
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
};

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

};

/**
 * this function deletes the previously selected images
 */
function resetZones() {

    let replaceImage = document.getElementsByClassName('images');

    for (let i = 0; i < replaceImage.length; i++) {
        replaceImage[i].remove();
    }
};