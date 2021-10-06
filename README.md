# battleship

+Step One
-Ship Factory Function
    length:,
    location: [],
    hit: [],
    sunk: false,

    -Hit Function
        push coorindates to hit
        -hit [
            {8, B},
            {7, B},
            {6, B}
        ]
        if sunk function
            length - hit.length = 0
            sunk = true

+Step Two
-Gameboard Factory Function
    ?place ship object at coordinates
    ?how do i get the coordinates of where to put the ships

    --example ship
    const battleship = {
        length: 4,
        location: [
            {2, B},
            {3, B},
            {4, B},
            {5, B}
        ],
        hit: [],
        sunk: false
    }
    --expected code to create these coordinates
    const startingLocation = {2, B}
    
    putPieceDown(startingLocation, ship.length)
    
    

    ?piece vertical or horizontal
    
    ship.location.push(coordinates)



    -Place ships
            ? place on coordinates
            i would assume lots of checks and balances here comparing coordinates to length.


    -Coordinates for the board
        10 x 10 squares
        Top letters
        Left numbers
        -Gameboard Array Function
            const createGameboardArray = (rows, columns) => [...Array(rows.keys())].map(i => Array(columns));
        
    -Number of ships
        1 x 4 length
        2 x 3 length
        3 x 2 length
        4 x 1 length

    -Recieve Attack Function
        (a, b) 
        if (a, b) = ship then ship hit
        if (a, b) != ship push to missed array
        if ship.length = ship.hit.length then return game over
    

+Step Three
-Player function
    create turns
    create computer player capable of slecting random spots on the board



