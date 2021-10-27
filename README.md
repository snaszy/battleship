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
  
        -define starting coordinates and then add the rest and push to ship location

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

    -Number of ships
        1 x 4 length
        2 x 3 length
        3 x 2 length
        4 x 1 length
        create a ship lenght array to contain these requirements

    -create ship array 
        //this should be an object inside an array
        //shipArray[0].location[i]
        [ 
            {
                length,
                vertical, 
                location: [],
                hit: [],
                sunk: false,
            },
            {
                length,
                vertical, 
                location: [],
                hit: [],
                sunk: false,
            },
        ]

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
           1 [{x: 1, y: 'A' , ship: true},{},{},{},{},{},{},{},{},{}],
           2 [{},{},{},{},{},{},{},{},{},{}],
           3 [{},{},{},{},{},{},{},{},{},{}],
           4 [{},{},{},{},{},{},{},{},{},{}],
           5 [{},{},{},{},{},{},{},{},{},{}],
           6 [{},{},{},{},{},{},{},{},{},{}],
           7 [{},{},{},{},{},{},{},{},{},{}],
           8 [{},{},{},{},{},{},{},{},{},{}],
           9 [{},{},{},{},{},{},{},{},{},{}],
          10 [{},{},{},{},{},{},{},{},{},{}],
        ]

    -Put ships on board
        -pushes ships into the blank objects,
         this would create the ships themselves and when clicked would mark as hit.
        ?how to tell where to put the ship, translate coordinates to the arrray
        ?if the object is blank how do i change the information

        const addShipsToBoard = () => {
            const gameBoard = createGameBoard();
            const shipsArray = createShipsArray(shipLengthsArray());

            for (let i = 0; i < shipsArray.length; i++) {
                let currentArray = shipsArray[i];

                for (let j = 0; j < currentArray.location.length; j++) {
                    //i need to get the value of the ships location to cross reference with the gameBoard index
                    const currentLocation = currentArray.location[i][j];
                    const currentX = currentLocation.x;
                    const currentY = charCodeAt(currentLocation.y) - 64;
                    
                    if (currentArray.location[i][j] === gameBoard[currentX][currentY]){
                        gameBoard[currentX][currentY].ship = true;
                    }
                }
            }    
        }
        //takes the two arrays and compares the ship array to game board array. changes the object on the gameboard to 
        reflect if there is a ship there.
       
    

    //ive got a function to do everything except make sure the ships array actually can fit on the game board array.
    i need to make the ships array compare the locations and make sure they dont overlap.

        create ship
        if shipArray.location[i] = currentLocation
        create new ship   

    //now there is an issue with gameboard and createships running at the same time
    I need to have a async funtion for this to find the location of the ship and compare it to the gameboard
    -gameboard is created
    -ships are created
    -compare ships location to gameboard, if they match then we change the gameboard ship to true

        -wait for ship to be created to find location
        -then compare that location to the gameboard





    -Recieve Attack Function
        (a, b) 
        if (a, b) = ship then ship hit
        if (a, b) != ship push to missed array
        if ship.length = ship.hit.length then return game over
    

+Step Three
-Player function
    create turns
    create computer player capable of slecting random spots on the board



start game
create ships
create game board
push ships to game board
every action changes ships
then pushes ships to gameboard
or push misses to gameboard
