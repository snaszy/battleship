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
const newShip = (array) => {
    let newShip = createShip(array); //creates a new ship with ship length array and random vertical 
    createRandomVertical(newShip); //makes it vertical or horizontal
    addCoordinatesToLocation(newShip, startingLocation());//adds vertical or horizontal coordinates for length
}

const createShipsArray = (array) => {
    let shipsArray = [];
    for (let i = 0; i < array.length; i++) {
        let ship = newShip(array[i]);
        /* for (let j = 0; j < ship.location.length; j++) {
            if (shipsArray.contains(ship.location[i][j])) { //checks to see if the new location is in the ship array
                ship = newShip(array[i]); //redefines the ship coordinates if there is a match
            };
        } */
        shipsArray.push(ship)
    }     
    return shipsArray;
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
        ship: false
    };
};

const createGameBoard = () => {
    let gameBoardArray = [];
    for (let i = 1; i < 11; i++) {
        let currentArray = []
        gameBoardArray.push(currentArray)
        for (let j = 1; j < 11; j++) {
           const currentLetter = String.fromCharCode(j + 64)
           currentArray.push(createGameBoardCoordinates(i, currentLetter))
        }
    };
    return gameBoardArray;
};

const addShipsToBoard = () => {
    const gameBoard = createGameBoard();
    const currentShips = createShipsArray(shipLengthsArray());

    for (let i = 0; i < currentShips.length; i++) {

        for (let j = 0; j < currentShips[0].location.length; j++) {
            //i need to get the value of the ships location to cross reference with the gameBoard index
            const currentLocation = currentShips[0].location[i][j];
            const currentX = currentLocation.x;
            const currentY = charCodeAt(currentLocation.y) - 64;
            
            if (currentShips[i].location[i][j] === gameBoard[currentX][currentY]){
                gameBoard[currentX][currentY].ship = true;
            }
        }
    }    
    return gameBoard;
}

//requirements on where the ships are placed need to be implemented

const startingLocation = () => {
    return {x: createRandomX(), y: createRandomY()};
};

const createRandomX = () => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
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

const recieveAttach = (object, coordinates) => {
    if (coordinates === object.location) {
        object.hit.push(coordinates);
    } else if (coordinates != object.location) {
        gameBoardArray.push(coordinates);
    }

    if (object.length === object.hit.length) {
        return 'Game Over';
    } 
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
    createShipsArray,
    shipLengthsArray,
    createGameBoard,
    addShipsToBoard,
}