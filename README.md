# battleship

+Step One
-Ship Factory Function
    length:,
    hit: [],
    sunk: false,

    -Hit Function
        push coorindates to hit
        if sunk function
            length - hit.length = 0
            sunk = true

+Step Two
-Gameboard Factory Function
    ?place ship object at coordinates

    -Recieve Attack Function
        (a, b) 
        if (a, b) = ship then ship hit
        if (a, b) != ship push to missed array
        if ship.length = ship.hit.length then reutrn game over

+Step Three
-Player function
    create turns
    create computer player capable of slecting random spots on the board

-Coordinates for the board
    10 x 10 squares
    Top letters
    Left numbers

-Number of ships
    1 x 4 length
    2 x 3 length
    3 x 2 length
    4 x 1 length

-Place ships
    gamboard(ships)
        ships.length
        ? place on coordinates

-hit [
    {8, B},
    {7, B},
    {6, B}
]