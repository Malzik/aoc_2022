const fs = require("fs");

const OPPONENT = {
    A: 0, //rock
    B: 1, //paper
    C: 2 //scissors
}

const ME = {
    X: 'loose',
    Y: 'draw',
    Z: 'win'
}

const POINTS = {
    0: 1,
    1: 2,
    2: 3
}
let total = 0;
fs.readFile("data.txt", function(error, data) {
    if (error) { throw error; }
    data.toString().split("\n").forEach((line) => {
        const round = line.split(' ');
        if (round !== undefined && round.length === 2) {
            const opponent = OPPONENT[round[0]];
            const me = selectShape(opponent, ME[round[1]]);

            let points = POINTS[me]
            if (me === opponent) {
                points += 3;
            } else if ((me === 0 && opponent === 2) || (me === 1 && opponent === 0) || (me === 2 && opponent === 1)) {
                points += 6;
            }
            total += points
        }
    });
    console.log(total)
});

const selectShape = (opponent, whatToDo) => {
    switch (whatToDo) {
        case 'draw':
            return opponent;
        case 'win':
            if (opponent === 2) {
                return 0;
            }
            return opponent + 1;
        case 'loose':
            if (opponent === 0) {
                return 2;
            }
            return opponent - 1;
    }
}
