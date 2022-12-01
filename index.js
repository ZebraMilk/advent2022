let input = [];

function textToArray(content) {
    [...content].split()
};





fetch("day1input.txt").then(response => response.text())
    .then(text => textToArray(text));


console.log(input);