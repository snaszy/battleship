const { expect } = require('@jest/globals');
const sunk = require('./index');
const gameBoard = require('./index');

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

it('sunk returns true', () => {
    expect(sunk()).toBe(battleship.sunk);
})