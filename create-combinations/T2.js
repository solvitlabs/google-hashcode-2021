// For a team of two
// const letters = ["a", "b", "c", "d", "e"];
// const letters = ["a", "b", "c"];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

var combinationsArr = [];
//first loop to select letters
while (letters.length != 0) {
    var selectedLetter = letters[0];
    letters.splice(0, 1);
    //second loop to combine letters
    for (let k = 0; k < letters.length; k++) {
        combinationsArr.push(selectedLetter + letters[k])
    }
}
console.log(combinationsArr);
