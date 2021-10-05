console.log('hello world')

const ship = (length) => {
    const shipObject = (length, sunk) => {
        return {
            length,
            hit: [],
            sunk,
        }
    };
    const hit = (object, a, b) => {
        object.hit.push(a, b);
    };
    const sunk = (object) => {
        if (length - object.hit.length === 0) {
            object.sunk = true;
        }
    }

}