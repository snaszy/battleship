console.log('hello world')

const ship = (object) => {
   
}

const hit = (object, coordinates) => {
    object.hit.push(coordinates);
};

const sunk = (object) => {
    if (object.length - object.hit.length === 0) {
        object.sunk = true;
    }
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

const modifyCoordinates = (object) => {
    if (object.vertical) {
        object.x++
    } else {
        object.y = nextChar(object.y)
    }
};

const nextChar = (c) => {
    String.fromCharCode(c.charCodeAt(0) + 1)
};

const addCoordinatesToLocation = (ship, startingLocation) => {
    let currentLocation
    for (let i = 0; i < ship.length; i++) {
        ship.location.push(currentLocation);
        currentLocation = modifyCoordinates(currentLocation);
    }
};

module.exports = {
    ship,
    gameBoard,
    sunk,
    hit,
    modifyCoordinates,
    nextChar,
    addCoordinatesToLocation,
}