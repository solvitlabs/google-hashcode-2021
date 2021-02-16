// For a team of two
var convertToObject = require('./convertToObject');
// const ingredientsBatch = ["a", "b", "c", "d", "e"];
// const ingredientsBatch = ["a", "b", "c"];
// const ingredientsBatch = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const ingredientsBatch = convertToObject();

var combinationsArr = [];
//first loop to select ingredientsBatch
while (ingredientsBatch.length != 0) {
    var selectedId = ingredientsBatch[0].id;
    ingredientsBatch.splice(0, 1);
    //second loop to combine ingredientsBatch
    for (let k = 0; k < ingredientsBatch.length; k++) {
        combinationsArr.push(selectedId + '-' + ingredientsBatch[k].id)
    }
}
console.log(combinationsArr);
