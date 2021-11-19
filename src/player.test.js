import {
    player,
    createPlayer,
    playerTurn,
    computerTurn,
    takeTurns,
} from './player.js'

it ('create player', () => {
    let newPlayer = player();
    expect(newPlayer).toEqual(
        expect.objectContaining({
            turn: false
        })
    )
})

it ('player turn modifies ship', () => {
    //playerTurn(x, y, playerObject)
    let newPlayer = player();
    playerTurn(1, 'A', newPlayer);
    //playerTurn(newPlayer)
    expect(newPlayer.gameboard).toHaveLength(10)
    expect(newPlayer.ships).toHaveLength(10)
    expect(newPlayer.turn).toBeTruthy
})

it ('computer turn modifies ship', () => {
    //computerTurn(computerObject)
    let newComputer = player();
    computerTurn(newComputer);
    expect(newComputer.gameboard).toHaveLength(10)
    expect(newComputer.ships).toHaveLength(10)
    expect(newComputer.turn).toBeTruthy
})

it('take turns allows the current player to change', () => {
    let newPlayer = player();
    let newComputer = player();
    takeTurns(newPlayer, newComputer);
})