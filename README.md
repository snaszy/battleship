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
            {x: 8, y: B},
            {x: 7, y: B},
            {x: 6, y: B}
        ]
        if sunk function
            length - hit.length = 0
            sunk = true

+Step Two
-Gameboard Factory Function

    -create ships from an array of lengths
        randomly define if vertical 

    -create random coordinates for ships and add
  
        -Define coordinates and push to ship

        createCoordinates = (object, number, letter) => {
            if (obeject.vertical) {
                    return {
                        x: number + 1,
                        y: letter
                    }
            } else {
                return {
                    x: number,
                    y: letter next letter,
                }
            }
        }
            const nextChar = (c) => {
                String.fromCharCode(c.charCodeAt(0) + 1)
            }

    -Coordinates for the board
        10 x 10 squares
        Top letters
        Left numbers
        -Gameboard Array Function
            const createGameboardArray = (rows, columns) => [...Array(rows.keys())].map(i => Array(columns));
    
    - Create gamebord
        -creates an array with blank objects
         these objects would be clickable either containing a ship
         or being a miss.
        -thinking of createing an array with 10 rows with 10 objects in each row.

        gameboardarray = [
               A, B, C, D, E, F, G, H, I, J
           1 [{},{},{},{},{},{},{},{},{},{}]
           2 [{},{},{},{},{},{},{},{},{},{}]
           3 [{},{},{},{},{},{},{},{},{},{}]
           4 [{},{},{},{},{},{},{},{},{},{}]
           5 [{},{},{},{},{},{},{},{},{},{}]
           6 [{},{},{},{},{},{},{},{},{},{}]
           7 [{},{},{},{},{},{},{},{},{},{}]
           8 [{},{},{},{},{},{},{},{},{},{}]
           9 [{},{},{},{},{},{},{},{},{},{}]
          10 [{},{},{},{},{},{},{},{},{},{}]
        ]

    -Put ships on board
        -pushes ships into the blank objects,
         this would create the ships themselves and when clicked would mark as hit.
        ?how to tell where to put the ship, translate coordinates to the arrray
        ?if the object is blank how do i change the information

       
        
        object.length to cycle through location

        object.location = coordinates

        gameboardarray[a][b].push(coordinates)
    
        gameboardarry[0][0] = object.location of {x: 1, y: A} 

        b = getchar of object.y - 64


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



