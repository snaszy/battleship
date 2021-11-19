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

export {
    createGameBoardCoordinates,
    createGameBoard,
    addShipLocationToBoard,
    currentShipIndex,
    addShipLocation,
    findBoardIndex,
    addShipHitsToBoard,
    currentHitIndex,
    addHitLocation,
    addMissToBoard,
    currentMissIndex,
    addMissLocation,
    startingLocation,
    checkStartingLocation,
    createRandomX,
    createRandomY,
    createRandomVertical,
    checkIfVertical,
    changeLocationX,
    changeLocationY,
    nextChar,
    nextNum,
    createCoordinates,
    addCoordinatesToLocation,
    recieveAttack,
    allShipsSunk,
}
    