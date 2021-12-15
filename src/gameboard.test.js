let shipArray = require('./shiparray');
let gameBoardArray = require('./gameboardarray');
let battleShip = require('./battleship');

const {
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
} = require('./gameboard');

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

it ('creates gameboard array', () => {
    const gameBoard = createGameBoard();
    expect(gameBoard).toHaveLength(10)
})

it ('find index of gameboard based on x and y values', () => {
    let currentIndex = findBoardIndex(gameBoardArray.gameboard, 0, 0)
    //console.log(gameBoardArray.gameboard[0][0])
    expect(currentIndex).toMatchObject({'hit': false, 'miss': false, 'ship': false, 'x': 1, 'y': 'A'})
})

it ('adds ships location object to gameboard location object', () => {
    let boardCoordinates = {'hit': false, 'miss': false, 'ship': false, 'x': 2, 'y': 'B'};
    let shipLocation = {'x': 2, 'y': 'B'};
    addShipLocation(shipLocation, boardCoordinates);
    expect(boardCoordinates).toMatchObject({'ship': true})
})

it ('find the index of the current ship', () => {
    let currentShip = battleShip.battleship.location[0];
    const shipIndex = currentShipIndex(currentShip, gameBoardArray.gameboard);
    expect(gameBoardArray).toEqual
        expect.arrayContaining([
            expect.arrayContaining([
                expect.objectContaining({
                    'hit': false, 'miss': false, 'ship': true, 'x': 1, 'y': 'A'
                })
            ])
        ])
    
})

/* it ('modifies gameboard to show ship', () => {
    let boardCoordinates = [[{'hit': false, 'miss': false, 'ship': false, 'x': 1, 'y': 'A'}], []];
    let shipLocation = {'x': 1, 'y': 'A'};
    let x = 0;
    let y = 0;
    updateGameBoard(shipLocation, boardCoordinates, x, y)
    expect(boardCoordinates).toEqual(expect.arrayContaining([[{'hit': false, 'miss': false, 'ship': true, 'x': 1, 'y': 'A'}]]))
}) */

it ('ships are editable', () => {
    let board = createGameBoard();
    let coordinates = board[0][0];
    coordinates.ship = true;
    expect(board).toEqual(
        expect.arrayContaining([
            expect.arrayContaining([
                expect.objectContaining({
                    'hit': false, 'miss': false, 'ship': true, 'x': 1, 'y': 'A'
                })
            ])
        ])
    )
})

//need to test to see if parts of the code work. update gameboard is farther down and is not doing what it needs to in this function

it ('updates gameboard array to show ships location', () => {
    let gameBoard = gameBoardArray.gameboard; 
    let currentShipArray = shipArray.shiparray; 
    addShipLocationToBoard(currentShipArray, gameBoard)
    expect(gameBoard).toEqual(
        expect.arrayContaining([
            expect.arrayContaining([
                expect.objectContaining({
                    'hit': false, 'miss': false, 'ship': true, 'x': 1, 'y': 'A'
                })
            ])
        ])
    )
})

it ('updates gameboard array to show ship that are hit', () => {
    let gameBoard = gameBoardArray.gameboard;
    let currentShipArray = shipArray.shiparray;
    addShipHitsToBoard(currentShipArray, gameBoard)
    
    expect(gameBoard).toEqual(
        expect.arrayContaining([
            expect.arrayContaining([
                expect.objectContaining({
                    'hit': true, 'miss': false, 'ship': true, 'x': 1, 'y': 'A'
                })
            ])
        ])
    )
})

xit ('recieve attack adds hit to ship in array', () => {
    //recieveAttack(coordinates, gameboard, ships)
    let gameBoard = createGameBoard();
    let attackCoordinates = {x: 1, y: 'A'};
    let ships = shipArray;
    addShipLocationToBoard(ships, gameBoard);
    recieveAttack(attackCoordinates, gameBoard, ships);
    addShipHitsToBoard(ships, gameBoard);
    expect(gameBoard).toEqual(
        expect.arrayContaining([
            expect.arrayContaining([
                expect.objectContaining({
                    'hit': true, 'miss': false, 'ship': true, 'x': 1, 'y': 'A'
                })
            ])
        ])
    )
})
