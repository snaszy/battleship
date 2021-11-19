import { 
    sunk, 
    hit, 
    createShip, 
} from '/ship.js'

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