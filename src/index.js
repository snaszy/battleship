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

const createShipsArray = () => {
    let shipsArray = [];
    const lengthArray = shipLengthsArray();
    for (let i = 0; i < lengthArray.length; i++) {
        let newShip = createNewShip(lengthArray[i]);
        shipsArray.push(newShip)
    }     
    return shipsArray;
    //need to find a way to prevent overlapping locations in the new ships.
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

const getLocation = async (ships) => {
    const location = await ships.location;
    return location
}

const addShipLocation = (location, board, x, y) => {
    if (location === board[x][y]) {
        board[x][y].ship = true;
    }
}

const addHitLocation = (location, board, x, y) => {
    if (location === board[x][y]) {
        board[x][y].hit = true;
    }
}

const addMissLocation =(location, board, x, y) => {
    if (location === board[x][y]) {
        board[x][y].miss = true;
    }
}

const findShipLocation = (ship) => {
    const currentLocation = ship.location[i][j];
    const currentX = currentLocation.x;
    const currentY = charCodeAt(currentLocation.y) - 64;
    addShipLocation(currentLocation, gameBoard, currentX, currentY);
}

const addShipsToBoard = () => {
    
    let gameBoard = createGameBoard();
    const currentShips = createShipsArray(shipLengthsArray());
    const shipsLocation = getLocation(currentShips)

    for (let i = 0; i < currentShips.length; i++) {
            for (let j = 0; j < shipsLocation.length; j++) {
            //value of the ships location cross referenced with the gameBoard index to define ship: true
            findShipLocation(currentShips);
        } 
    }
    return gameBoard;
};

//requirements on where the ships are placed need to be implemented so they dont got off the board

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
    if (object.vertical) {
        changeLocationX(object, coordinates);
    } else {
        changeLocationY(object, coordinates);
    };
};

const changeLocationX = (object, coordinates) => {
    if (object.location.length === 0) {
        object.location.push(coordinates);
    } else {
        let currentLocation = object.location[object.location.length - 1];
        object.location.push(createCoordinates(nextNum(currentLocation.x), currentLocation.y));
    };
};

const changeLocationY = (object, coordinates) => {
    if (object.location.length === 0) {
        object.location.push(coordinates);
    } else {
        let currentLocation = object.location[object.location.length - 1];
        object.location.push(createCoordinates(currentLocation.x, nextChar(currentLocation.y)));
    };
};

const nextChar = (c) => {
    return String.fromCharCode(c.charCodeAt(0) + 1)
};

const nextNum = (number) => {
    return number + 1
};

const createCoordinates = (number, letter) => {
        return {
            x: number,
            y: letter,
        };
};

const addCoordinatesToLocation = (object, coordinates) => {
    for (let i = 2; i < object.length + 2; i++) {
        checkIfVertical(object, coordinates);
    }
};

const matchCoordinates = (x, y) => {
    const matchedShips = shipArray.filter(coordinates => {
        coordinates.location.x === x && coordinates.location.y === y;
    })
}

const recieveAttach = (coordinates, object) => {
    if (coordinates === object.location) {
        object.hit.push(coordinates);
    } else if (coordinates != object.location) {
        gameBoardArray.push(coordinates);
    }

    if (object.length === object.hit.length) {
        object.sunk = true;
    } 
}

const allShipsSunk = () => {
    //if total of 10 ships contain sunk true game over
    const sunkShips = shipArray.filter(ships => {
        return ships.sunk = true;
    })
    if (sunkShips.length === 10) {
        alert('Game Over')
    }
}

const player = () => {
    //turns to attack enemy gameboard
    //computer capable of making random plays, no location twice
}

const mainGameLoopsAndDom = () => {
    //user interface
    //game loop of new players and gameboards
    //predetermined coordinates for pieces for now
    //html should display both players boards and render them using gameboard
    //game loop step through the game turn by turn using methods from other objects
    //if you want a new function for the game loop step back and figure out what module that should belong to
    //create conditions to end the game when all ships have been sunk
}

module.exports = {
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
    //placeShips,
    addShipsToBoard,
    saveLocalStorage,
    getLocalStorage,
}