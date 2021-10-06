# battleship

+Step One
-Ship Factory Function
    -ship {
        length:,
        location: [],
        hit: [],
        sunk: false,
    }

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
    ?piece vertical or horizontal
    ?where to start

    -create coordinates for ships

    -Create ships and push to array

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
        
    -Define coordinates and push to ship
        const startingLocation = {2, B}

        defineCoordinates(coordinate a, coordinate b)
        if vertical equals true = 
            coordinate a++
        else  
            nextChar(coordinate b)

        nextChar = (c) => {
            String.fromCharCode(c.charCodeAt(0) + 1)
        }

        defineCoodinates(startingLocation)
            if  ship.length > 1 
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

    -Put ships on board
        we are going to need to add the ships location to the gameboard

        const gameboardArray = (rows, columns) => [...Array(rows.keys())].map(i => Array(columns));

        addShip(ship)
            battleship.location.push(gameBoardArray)
        
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



