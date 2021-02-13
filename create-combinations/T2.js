// For a team of two
var possibleCombinations = require('./possibleCombinations');

const teamMembers = 2;
// const letters = ["a", "b", "c", "d", "e"];
// const letters = ["a", "b", "c"];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const totalPossibleCombinations = possibleCombinations(letters.length, teamMembers);

var combinationsArr = [];
//first loop to select letters
for (let j = 0; j < totalPossibleCombinations; j++) {
    var selectedLetter = letters[0];
    letters.splice(0, 1);
    //second loop to combine letters
    for (let k = 0; k < letters.length; k++) {
        combinationsArr.push(selectedLetter + letters[k])
    }
}
console.log(combinationsArr);
console.log(totalPossibleCombinations);
console.log(combinationsArr.length);
