const player = () => {
    //turns to attack enemy gameboard
    //computer capable of making random plays, no location twice
    let shipsArray = createShipsArray(shipLengthsArray())
    let gameBoard = createGameBoard();
    addShipLocationToBoard(shipsArray, gameBoard);
    console.log(gameBoard)
    return createPlayer(shipsArray, gameBoard)
}

let createPlayer = (ships, gameboard) => {
    //each player has their own gameboard with ships on it
    return {
        turn: false,
        'ships': ships,
        'gameboard': gameboard
    };
}

//const playerTurn = (playerObject) => {
const playerTurn = (x, y, playerObject) => {
    //takes in coordinates and players info
    //modifies ships and gameboard arrays to show hit or miss
    //const playerGameBoard = playerObject.gameboard;
    //const playerShips = playerObject.ships;
    //where does current attack come into play?
    //const playerCoordinates = {x: 1, y: 'A'}
    const playerCoordinates = createCoordinates(x, y);
    //recieve attack needs to go here.
    addShipLocationToBoard(playerObject.ships, playerObject.gameboard)
    recieveAttack(playerCoordinates, playerObject.gameboard, playerObject.ships)
    addShipHitsToBoard(playerObject.ships, playerObject.gameboard)
}

const computerTurn = (computerObject) => {
    const checkLocation = checkStartingLocation(computerObject.gameboard)
    const computerCoordinates = checkLocation//{x: 1, y: 'A'}//startingLocation();
    addShipLocationToBoard(computerObject.ships, computerObject.gameboard)
    recieveAttack(computerCoordinates, computerObject.gameboard, computerObject.ships)
    addShipHitsToBoard(computerObject.ships, computerObject.gameboard)
}

const takeTurns = (x, y, player, computer) => {
    if (player.turn) {
        //random inputs for now
        //const currentInputX = createRandomX();
        //const currentInputY = createRandomY();
        playerTurn(x, y, player);
        player.turn = false;
    } else {
        computerTurn(computer);
        player.turn = true;
    }

}

export {
    player,
    createPlayer,
    playerTurn,
    computerTurn,
    takeTurns,
}
