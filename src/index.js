import './style.css';
import './ship'
import './gameboard'
import './player'
import './dom'

console.log('hello world')

const saveLocalStorage = () => {
    localStorage.setItem('MyList', JSON.stringify(gameBoardArray));
}

const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('MyList'))
}

const getLocation = async (ship) => {
    //created to wait for the ships location while i look through the ships
    try {
        const location = await ship.location;
        return location;
    } catch (error) {
        console.log(error)
    }
};
const getShipsArray = async (ships) => {
    try {
        const shipsArray = await ships;
        return shipsArray;
    } catch (error) {
        console.log(error)
    }
}

//createNewGame();

export {

}