//import './style.css';

console.log('hello world')

let battleship = {
    length: 4,
    location: [
        {x: 2, y: 'B'},
        {x: 3, y: 'B'},
        {x: 4, y: 'B'},
        {x: 5, y: 'B'}
    ],
    vertical: false,
    hit: [],
    sunk: false
};

//currentShipsArray

//gameBoardArray

const createNewShip = (array) => {
    let newShip = createShip(array); //creates a new ship with correct length 
    createRandomVertical(newShip); //makes it vertical or horizontal
    addCoordinatesToLocation(newShip, startingLocation());//adds coordinates for length
    return newShip
}

const createShipsArray = (array, gameBoard) => {
    let shipsArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[0]) {
            let firstLocation = checkStartingLocation(gameBoard)
            shipsArray.push(createNewShip(firstLocation))
        } else {
            let newLocation = checkShipsInArray(array[i], shipsArray, array);
            shipsArray.push(createNewShip(newLocation))
        }
    }     
    return shipsArray;
    //need to find a way to prevent overlapping locations in the new ships.
} 

const checkShipsInArray = (location, shipsArray, array) => {
    for (let i = 0; i < shipsArray.length; i++) {
        if (shipsArray[i] !== location) {
            return location;
        } else {
            createShipsArray(array)
        }
    }
}

const hit = (object, coordinates) => {
    object.hit.push(coordinates);
};

const sunk = (object) => {
    if (object.length - object.hit.length === 0) {
        object.sunk = true;
    } else {
        object.sunk = false;
    };
    return object.sunk;
};

const createShip = (length) => {
    return {
        length,
        vertical: false, 
        location: [],
        hit: [],
        sunk: false,
    };
};

const shipLengthsArray = () => {
    return [4,3,3,2,2,2,1,1,1,1];
};

const createGameBoardCoordinates = (number, letter) => {
    return {
        x: number,
        y: letter,
        ship: false,
        hit: false,
        miss: false,
    };
};

const createGameBoard = () => {
    let gameBoardArray = [];
    for (let i = 1; i < 11; i++) {
        let currentArray = []
        gameBoardArray.push(currentArray)
        for (let j = 1; j < 11; j++) {
           const currentLetter = String.fromCharCode(j + 64);
           currentArray.push(createGameBoardCoordinates(i, currentLetter));
        }
    };
    return gameBoardArray;
};

const saveLocalStorage = () => {
    localStorage.setItem('MyList', JSON.stringify(gameBoardArray));
}

const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('MyList'))
}

//this is where i need to start waiting for stuff to be built before accessing it. 
//not an issue with the code, an issue with waiting

//here Im putting the ships array on the gameBoard array
//or adding true or false to the gameboard array {ship: true}

const getLocation = async (ship) => {
    //created to wait for the ships location while i look through the ships
    try {
        const location = await ship.location;
        return location;
    } catch (error) {
        console.log(error)
    }
};
const getShipsArray = async (ships) => {
    try {
        const shipsArray = await ships;
        return shipsArray;
    } catch (error) {
        console.log(error)
    }
}

/* const addHitLocation = (location, boardCoordinates) => {
    //reference ship and board to define if the ship has been hit there
    if (location === boardCoordinates || boardCoordinates.ship) {
        boardCoordinates.hit = true;
    }
}

const addMissLocation = (location, boardCoordinates) => {
    //reference ship and board to define if there has been a miss to display
    if (location === boardCoordinates || !boardCoordinates.ship) {
        boardCoordinates.miss = true;
    }
} */
 
//tried to add ship, hit and miss all at once but one goes through an array they other is just a coordinate
/* const updateGameBoard = (location, board, x, y) => {
    //
    const boardIndex = findBoardIndex(board, x, y);
    addShipLocation(location, boardIndex);
    addHitLocation(location, boardIndex);
    addMissLocation(location, boardIndex);
} */

const addShipLocationToBoard = (ships, board) => {
//comparing the location of ships numerical location to gameboards numerical location
//const currentShips = getShipsArray(ships)
    for (let i = 0; i < ships.length; i++) {
        //gets ships location
        //const ship = getLocation(currentShips[i]);
        //goes through each ship
        //returns ships.location
        let shipsLocations = ships[i].location;
        //let shipHit = ships[i].hit;

        for (let j = 0; j < shipsLocations.length; j++) {
            currentShipIndex(shipsLocations[j], board)
            /* //ships[i] = ship
            //ship[j] = ships.location[j]
            const currentLocation = currentShips[i][j];
            const boardIndexX = currentLocation.x - 1;
            const boardIndexY = (charCodeAt(currentLocation.y) - 64) - 1;
            //value of the ships location returned as numerical value
            addShipLocation(currentLocation, findBoardIndex(board, boardIndexX, boardIndexY))
            //addShipLocation(currentLocation, board, boardIndexX, boardIndexY) */
        } 
    }
    
    //dont know if this is returning all the values or just one. had the function in the loop but tried to move it. maybe that wont work
};

const currentShipIndex = (ship, board) => {
    const boardIndexX = ship.x - 1;
    const boardIndexY = (ship.y.charCodeAt(0) - 64) - 1;
    addShipLocation(ship, findBoardIndex(board, boardIndexX, boardIndexY))
}

const addShipLocation = (location, boardCoordinates) => {
    //reference ship and board to define yes ship is there
/*
const addShipLocation = (location, board, x, y) => {
    if (location === board[x][y]) {
    board[x][y].ship = true;
} */
    if (location.x === boardCoordinates.x && location.y === boardCoordinates.y) {
        boardCoordinates.ship = true;
    }
}

const findBoardIndex = (board, x, y) => {
    //find the x and y of board according to numerical coordinates of ship
    //return board[x][y];
    return board[x][y]
}

const addShipHitsToBoard = (ships, board) => {
    for (let i = 0; i < ships.length; i++) {
        let ship = ships[i].hit;
        for (let j = 0; j < ship.length; j++) {
            currentHitIndex(ship[j], board)
        } 
    }
};

const currentHitIndex = (ships, board) => {
    const boardIndexX = ships.x - 1;
    const boardIndexY = (ships.y.charCodeAt(0) - 64) - 1;
    addHitLocation(ships, findBoardIndex(board, boardIndexX, boardIndexY))
}

const addHitLocation = (location, boardCoordinates) => {
    if (location.x === boardCoordinates.x && location.y === boardCoordinates.y) {
        boardCoordinates.hit = true;
    }
}

const addMissToBoard = (ships, board) => {
    for (let i = 0; i < ships.length; i++) {
        let ship = ships[i].location;
        for (let j = 0; j < ship.length; j++) {
            currentMissIndex(ship[j], board)
        } 
    }
};

const currentMissIndex = (ships, board) => {
    const boardIndexX = ships.x - 1;
    const boardIndexY = (ships.y.charCodeAt(0) - 64) - 1;
    addMissLocation(ships, findBoardIndex(board, boardIndexX, boardIndexY))
}

const addMissLocation = (location, boardCoordinates) => {
    if (location.x !== boardCoordinates.x && location.y !== boardCoordinates.y) {
        boardCoordinates.miss = true;
    }
}

/* const addShipToBoard = (ships, board) => {
    //-run through ships
    const currentShip = currentShipIndex(ships, board)
    //returns ship coordinates
    //-find the gameboard location
    const boardCoordinates = findBoardCoordinates(board, currentShip)
    //returns board coordinates
    //-modify gameboard to show ships
    addShipLocation(currentShip, boardCoordinates);
    //adds true to coordinates on gameboard
} */

//requirements on where the ships are placed need to be implemented so they dont got off the board
const checkStartingLocation = (array) => {
    let randomX = createRandomX();
    let randomY = createRandomY();
    const currentCoordinates = createCoordinates(randomX, randomY);
    if (currentCoordinates === array) {

    }
    return {currentCoordinates}
}

const startingLocation = () => {
    return {x: createRandomX(), y: createRandomY()};
};

const createRandomX = () => {
    const getRandomInt = (max) => {
        return Math.floor((Math.random() * max) + 1);
    };
    return getRandomInt(10);
    //create random number between 1 and 10
};

const createRandomY = () => {
    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
      };
      return String.fromCharCode(getRandomArbitrary(65, 75));
    //create random letter between A and J
};

const createRandomVertical = (object) => {
    const getRandomInt = (max) => { Math.floor(Math.random() * max) };
    if (getRandomInt(2) > 0) {
        object.vertical = true;
    } else {
        object.vertical = false;
    };
    //create vertical true or false
};

const checkIfVertical = (object, coordinates) => {
    //if object.vertical = true this helps to add coordinates on x axis, if not then y axis
    if (object.vertical) {
        changeLocationX(object, coordinates);
    } else {
        changeLocationY(object, coordinates);
    };
};

const changeLocationX = (object, coordinates) => {
    //this adds more locations on the x axis according to length
    if (object.location.length === 0) {
        object.location.push(coordinates);
    } else {
        let currentLocation = object.location[object.location.length - 1];
        object.location.push(createCoordinates(nextNum(currentLocation.x), currentLocation.y));
    };
};

const changeLocationY = (object, coordinates) => {
    //this adds more locations on the y axis according to length
    if (object.location.length === 0) {
        object.location.push(coordinates);
    } else {
        let currentLocation = object.location[object.location.length - 1];
        object.location.push(createCoordinates(currentLocation.x, nextChar(currentLocation.y)));
    };
};

const nextChar = (c) => {
    // this finds the next character
    return String.fromCharCode(c.charCodeAt(0) + 1)
};

const nextNum = (number) => {
    //finds the next number
    return number + 1
};

const createCoordinates = (number, letter) => {
        return {
            x: number,
            y: letter,
        };
};

const addCoordinatesToLocation = (object, coordinates) => {
    //this is used with ship creation, maybe move it up there
    for (let i = 2; i < object.length + 2; i++) {
        checkIfVertical(object, coordinates);
    }
};

/* const filterCoordinates = (cordX, cordY, ships) => {
    const matchedShips = ships.filter(ship => ship.location.x === cordX && ship.location.y === cordY)
} */

//recieve attack should push the hit to the ship
//then the ship should be pushed to the board with the update
/* const recieveAttack = (coordinates, gameBoard, ships) => {
    //find coordinates of the boardboard and user inputed coordinates
    const currentShip = ships.filter(function(ship) {
        return ship.location === coordinates;
    });
    console.log(currentShip)
    console.log(coordinates)
    if (currentShip) {
        //find current ship through user inputed coordinates
        //adds hit to ship array
        hit(currentShip, coordinates);
        //adds hit to gameboard array
        addShipHitsToBoard(coordinates, gameBoard);
        //--push coordinates on ship and gameboard, either have the ship update the gameboard or do both
        //--instead of having addHitLocation update the gameboard, loop through the ships object to update it
        //check if all ships are sunk
        if (currentShip.length === currentShip.hit.length) {
            currentShip.sunk = true;
        } 
    } else {
        //add coordinates to gameboard showing a miss
        addMissToBoard(coordinates, gameBoard)
    }
} */

const recieveAttack = (coordinates, board, ships) => {
    for (let i = 0; i < ships.length; i++) {
        let ship = ships[i].location;
        for (let j = 0; j < ship.length; j++) {
            if (ship[j] === coordinates) {
                hit(ship[j], board);
                addShipHitsToBoard(coordinates, board);
                if (ship[i].length === ship[i].hit.length) {
                    ship[i].sunk = true;
                    allShipsSunk(ships);
                } 
            } else {
                addMissToBoard(coordinates, board);
            }
        } 
    }
};

const allShipsSunk = (shipsArray) => {
    //if total of 10 ships contain sunk true game over
    const sunkShips = shipsArray.filter(ships => ships.sunk === true);
    if (sunkShips.length === 10) {
        alert('Game Over')
    }
}

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

//createNewGame();

export {
    sunk,
    hit,
    createShip,
    startingLocation,
    createRandomX,
    createRandomY,
    createRandomVertical,
    checkIfVertical,
    changeLocationX,
    changeLocationY,
    nextChar,
    addCoordinatesToLocation,
    createNewShip,
    createShipsArray,
    shipLengthsArray,
    createGameBoard,
    addShipLocation,
    addShipLocationToBoard,
    addShipHitsToBoard,
    recieveAttack,
    player,
    createPlayer,
    playerTurn,
    computerTurn,
    takeTurns,
}