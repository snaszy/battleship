const { expect } = require('@jest/globals');
const { SUGGEST_TO_CONTAIN_EQUAL } = require('jest-matcher-utils');
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
        addShipLocation, 
        addShipLocationToBoard,
        addShipHitsToBoard,
        recieveAttack,
        saveLocalStorage,
        getLocalStorage,
        player,
        createPlayer,
        playerTurn,
        computerTurn,
        takeTurns,
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
const shipArray = [
    {
        length: 4,
        location: [
            {x: 1, y: 'A'},
            {x: 2, y: 'A'},
            {x: 3, y: 'A'},
            {x: 4, y: 'A'}
        ],
        vertical: false,
        hit: [
            {x:1, y: 'A'}
        ],
        sunk: false
    },
    {
        length: 2,
        location: [
            {x: 2, y: 'D'},
            {x: 3, y: 'D'},
        ],
        vertical: false,
        hit: [],
        sunk: false
    },
]

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
    console.log(shipsArray)
})

it ('creates gameboard array', () => {
    const gameBoard = createGameBoard();
    expect(gameBoard).toHaveLength(10)
})

it ('adds ships location to gameboard', () => {
    let boardCoordinates = {'hit': false, 'miss': false, 'ship': false, 'x': 2, 'y': 'B'};
    let shipLocation = {'x': 2, 'y': 'B'};
    addShipLocation(shipLocation, boardCoordinates);
    expect(boardCoordinates).toMatchObject({'ship': true})
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
    let gameBoard = createGameBoard();
    addShipLocationToBoard(shipArray, gameBoard)
    
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
    let gameBoard = createGameBoard();
    addShipHitsToBoard(shipArray, gameBoard)
    
    expect(gameBoard).toEqual(
        expect.arrayContaining([
            expect.arrayContaining([
                expect.objectContaining({
                    'hit': true, 'miss': false, 'ship': false, 'x': 1, 'y': 'A'
                })
            ])
        ])
    )
})

it ('recieve attack adds hit to ship in array', () => {
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

it ('create player', () => {
    let newPlayer = player();
    expect(newPlayer).toEqual(
        expect.objectContaining({
            turn: false
        })
    )
})

it ('player turn modifies ship', () => {
    //playerTurn(x, y, playerObject)
    let newPlayer = player();
    playerTurn(1, 'A', newPlayer);
    //playerTurn(newPlayer)
    expect(newPlayer.gameboard).toHaveLength(10)
    expect(newPlayer.ships).toHaveLength(10)
    expect(newPlayer.turn).toBeTruthy
})

it ('computer turn modifies ship', () => {
    //computerTurn(computerObject)
    let newComputer = player();
    computerTurn(newComputer);
    expect(newComputer.gameboard).toHaveLength(10)
    expect(newComputer.ships).toHaveLength(10)
    expect(newComputer.turn).toBeTruthy
})

it('take turns allows the current player to change', () => {
    let newPlayer = player();
    let newComputer = player();
    takeTurns(newPlayer, newComputer);
})