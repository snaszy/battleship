const { expect } = require('@jest/globals');
const { 
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
        addShipsToBoard 
    } = require('./index')

const battleship = {
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

it('sunk returns false', () => {
    expect(sunk(battleship)).toBe(false);
})
it ('hit to push coordinates', () => {
    const coordinates = {x:2, y:'B'};
    hit(battleship, coordinates)
    expect(battleship.hit).toEqual([{x:2, y:'B'}])
})
it ('creates ship', () => {
    expect(createShip(4, false)).toEqual(
        {
            length: 4,
            vertical: false, 
            location: [],
            hit: [],
            sunk: false,
        }
    )
})

it ('contain 1-10', () => {
    expect(createRandomX()).toBeGreaterThan(0);
    expect(createRandomX()).toBeLessThan(11);
})

it ('contain A-J', () => {
    expect(createRandomY()).toMatch(/[A-J]+/g)
})



it ('add x cordinates to location', () => {
    const verticalShip = {
        vertical: true,
        location: [],
    };
    const coordinates = {x: 2, y: 'B'}
    changeLocationX(verticalShip, coordinates)
    expect(verticalShip.location).toEqual([{x: 2, y: 'B'}]);
});

it ('add updated x cordinates to location', () => {
    const verticalShip = {
        vertical: true,
        location: [
            {x: 2, y: 'B'}
        ],
    };
    const coordinates = {x: 2, y: 'B'}
    changeLocationX(verticalShip, coordinates)
    expect(verticalShip.location).toEqual([
        {x: 2, y: 'B'},
        {x: 3, y: 'B'}
    ]);
});

it ('returns the next character', () => {
    expect(nextChar('B')).toEqual('C');
})

it ('add to y cordinates', () => {
    const horizontalShip = {
        vertical: false,
        location: []
    };
    const coordinates = {x: 2, y: 'B'}
    changeLocationY(horizontalShip, coordinates)
    expect(horizontalShip.location).toEqual([{x: 2, y: 'B'}]);
});

it ('add updated y cordinates to location', () => {
    const horizontalShip = {
        vertical: false,
        location: [{x: 2, y: 'B'}]
    };
    const coordinates = {x: 2, y: 'B'}
    changeLocationY(horizontalShip, coordinates)
    expect(horizontalShip.location).toEqual([
        {x: 2, y: 'B'},
        {x: 2, y: 'C'}]);
});

it ('pushes all coordinates to locations of object', () => {
    const miniShip = {
        length: 4,
        vertical: true,
        location: []
    }
    let start = {x: 2, y: 'B'};
    addCoordinatesToLocation(miniShip, start);
    expect(miniShip.location).toEqual([
        {x: 2, y: 'B'},
        {x: 3, y: 'B'},
        {x: 4, y: 'B'},
        {x: 5, y: 'B'},
    ])
})

it ('creates ships array from lengths', () => {
    const shipsArray = createShipsArray(shipLengthsArray());
    expect(shipsArray).toHaveLength(10)
})

it ('creates gameboard array', () => {
    const gameBoard = createGameBoard();
    expect(gameBoard).toHaveLength(10)
})

it ('add ships to board', () => {
    const gameBoard = addShipsToBoard();
    expect(gameBoard).toHaveLength(10)
})
