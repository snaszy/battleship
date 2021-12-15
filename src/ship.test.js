const battleship = require('./battleship');

const { 
    createNewShip,
    createShipsArray,
    checkShipsInArray,
    hit,
    sunk,
    createShip,
    shipLengthsArray
} = require('./ship.js')

it ('creates ships array from lengths', () => {
    const shipsArray = createShipsArray(shipLengthsArray());
    expect(shipsArray).toHaveLength(10)
    console.log(shipsArray)
})

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