const { expect } = require('@jest/globals');
const { sunk, hit, createShip, modifyCoordinates, nextChar, addCoordinatesToLocation } = require('./index')

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
    expect(createShip(4)).toEqual(
        {
            length: 4,
            vertical: false, 
            location: [],
            hit: [],
            sunk: false,
        }
    )
})
it ('add to x cordinates', () => {
    const verticalShip = {
        vertical: true,
        location: [{x: 2, y: 'B'}]
    };
    modifyCoordinates(verticalShip)
    expect(verticalShip.location).toEqual([{x: 3, y: 'B'}]);
});
it ('returns the next character', () => {
    expect(nextChar('B')).toEqual('C');
})
it ('add to y cordinates', () => {
    const horizontalShip = {
        vertical: false,
        location: [{x: 2, y: 'B'}]
    };
    modifyCoordinates(horizontalShip)
    expect(horizontalShip.location).toEqual([{x: 2, y: 'C'}]);
});
it ('pushes all coordinates to locations of object', () => {
    const miniShip = {
        length: 4,
        vertical: false,
        location: []
    }
    const start = {x: 2, y: 'B'};
    addCoordinatesToLocation(miniShip, start);
    expect(miniShip.location).toContain([
        {x: 2, y: 'B'},
        {x: 3, y: 'B'},
        {x: 4, y: 'B'},
        {x: 5, y: 'B'},
    ])
})
