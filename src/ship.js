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

export {
    createNewShip,
    createShipsArray,
    checkShipsInArray,
    hit,
    sunk,
    createShip,
    shipLengthsArray,
}