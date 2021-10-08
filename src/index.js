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

const createShip = (length) => {
    return {
        length,
        vertical: false, 
        location: [],
        hit: [],
        sunk: false,
    }
};

const gameBoard = (object) => {
   
};
const startingLocation = (object) => {
    object.location.push({x: 2, y: "B"})
}

const modifyCoordinates = (object) => {
    if (object.vertical) {
        addLocationX(object);
    } else {
        addLocationY(object);   
    }
};

const addLocationX = (object) => {
    object.location[0].x++;
}

const addLocationY = (object) => {
    object.location[0].y = nextChar(object.location[0].y);
}

const nextChar = (c) => {
    return String.fromCharCode(c.charCodeAt(0) + 1)
};

const addCoordinatesToLocation = (object, startingLocation) => {
    let currentLocation = startingLocation;
    for (let i = 0; i < object.length; i++) {
        object.location.push(currentLocation);
        modifyCoordinates(currentLocation);
    }
    return object.location
};

module.exports = {
    sunk,
    hit,
    createShip,
    startingLocation,
    modifyCoordinates,
    nextChar,
    addCoordinatesToLocation
}