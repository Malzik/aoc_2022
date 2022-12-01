const fs = require("fs");

let max = [];
let current = 0;

fs.readFile("data.txt", function(error, data) {
    if (error) { throw error; }
    data.toString().split("\n").forEach((line) => {
        if (line.length !== 0) {
            current += parseInt(line);
        } else {
            max.push(current);
            current = 0;
        }
    });
    max.sort((a, b) => b - a)
    console.log(max[0] + max[1] + max[2])
});
