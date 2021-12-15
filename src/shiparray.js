let shiparray = [
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
];

module.exports = { shiparray };