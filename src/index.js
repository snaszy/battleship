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

const ship = (object) => {
   // pushes ships with empty coordinates to gameboardArray
   gameBoard(createShip(shipLengths(), createRandomVertical()));
}

const hit = (object, coordinates) => {
    object.hit.push(coordinates);
};

const sunk = (object) => {
    if (object.length - object.hit.length === 0) {
        object.sunk = true;
    } else {
        object.sunk = false;
    }
    return object.sunk;
}

const createShip = (length, vertical) => {
    return {
        length,
        vertical, 
        location: [],
        hit: [],
        sunk: false,
    }
};
const shipLengths = () => {
    [4,3,3,2,2,2,1,1,1,1]
}

const gameBoard = (object) => {
   //array of ships on the board
   let gameBoardArray = [];
   gameBoardArray.push(object);
   //kind of a tracker to see where items are on the board
   //lets me decide where to place new ships
   //lots of requirements about what ship could be placed where
};
const startingLocation = () => {
    return {x: createRandomX(), y: createRandomY()}
}

const createRandomX = () => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    return getRandomInt(10);
    //create random number between 1 and 10
}

const createRandomY = () => {
    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
      }
      return String.fromCharCode(getRandomArbitrary(65, 75));
    //create random letter between A and J
}

const createRandomVertical = (object) => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    if (getRandomInt(2) > 0) {
        object.vertical = true;
    } else {
        object.vertical = false;
    };
    //create vertical true or false
}

const checkIfVertical = (object, coordinates) => {
    if (object.vertical) {
        changeLocationX(object, coordinates);
    } else {
        changeLocationY(object, coordinates);
    }
};

const changeLocationX = (object, coordinates) => {
    if (object.location.length === 0) {
        object.location.push(coordinates);
    } else {
        let currentLocation = object.location[object.location.length - 1];
        object.location.push(createCoordinates(nextNum(currentLocation.x), currentLocation.y));
    }
}

const changeLocationY = (object, coordinates) => {
    if (object.location.length === 0) {
        object.location.push(coordinates);
    } else {
        let currentLocation = object.location[object.location.length - 1];
        object.location.push(createCoordinates(currentLocation.x, nextChar(currentLocation.y)));
    }
}

const nextChar = (c) => {
    return String.fromCharCode(c.charCodeAt(0) + 1)
};

const nextNum = (number) => {
    return number + 1
}

const createCoordinates = (number, letter) => {
        return {
            x: number,
            y: letter
        }
}

const addCoordinatesToLocation = (object, coordinates) => {
    for (let i = 2; i < object.length + 2; i++) {
        checkIfVertical(object, coordinates);
    }
};

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
    addCoordinatesToLocation
}