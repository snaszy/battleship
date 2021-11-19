//new game would take player 1 information and create the player, board, and ships
//maybe add it to the game array
/* const createNewGame = () => {

    let newPlayer = player();
    let newComputer = player();
    addShipLocationToBoard(newPlayer.ships, newPlayer.gameboard);
    updateDOM(newPlayer, playerContainer)
    addShipLocationToBoard(newComputer.ships, newComputer.gameboard)
    updateDOM(newComputer, computerContainer)
    checkInput(newPlayer, newComputer);
} */

/* const gameLoop = (x, y, player, computer) => {
    takeTurns(x, y, player, computer)
    updateDOM(player, playerContainer)
    updateDOM(computer, computerContainer)
} */

//user interface
//game loop of new players and gameboards
//predetermined coordinates for pieces for now
//html should display both players boards and render them using gameboard
//game loop step through the game turn by turn using methods from other objects
//if you want a new function for the game loop step back and figure out what module that should belong to
//create conditions to end the game when all ships have been sunk


/* const playerContainer = document.querySelector('[data-player]');
const computerContainer = document.querySelector('[data-computer]');
const fire = document.querySelector('[data-new-game]');

const updateDOM = (array, container) => {
    container.querySelectorAll('button').forEach(box => box.remove())
    for (let i = 0; i < array.gameboard.length; i++) {
        for (let j = 0; j < array.gameboard[i].length; j++) {
            const gamePiece = document.createElement('button');
            //gamePiece.classList.toggle(checkInformation(array.gameboard[i][j]))
            //checkInformation(gamePiece, array.gameboard[i][j])
            container.appendChild(gamePiece);
            checkInformation(gamePiece, array.gameboard[i][j])
        }
    }
}
const checkInput = (player, computer) => {
    fire.addEventListener('submit', () => {
        const xInput = document.querySelector('x-location')
        const xValue = xInput.value;
        const yInput = document.querySelector('y-location')
        const yValue = yInput.value;
        gameLoop(xValue, yValue, player, computer)
    })
}

const checkInformation = (button, information) => {
    if (information.hit) {
        button.classList.toggle('hit')
    } else if (information.ship) {
        button.classList.toggle('ship')
    } else if (information.miss) {
        button.classList.toggle('miss')
    }
} */
/* gameContainer.querySelectorAll('[data-box]').forEach(box => box.remove())
        for (let i = 0; i < 9; i++) {
            const game = document.createElement('button');
            game.setAttribute('data-box', '');
            game.textContent = gameBoard[i];
            gameContainer.appendChild(game); */