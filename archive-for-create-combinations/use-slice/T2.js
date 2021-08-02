// For a team of two
const fs = require('fs');
var convertToObject = require('./convertToObject');
// const ingredientsBatch = ["a", "b", "c", "d", "e"];
// const ingredientsBatch = ["a", "b", "c"];
const ingredientsBatch = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
// var ingredientsBatch = convertToObject();
console.log("file: T2.js ~ line 8 ~ ingredientsBatch", ingredientsBatch);

var combinationsArr = [];
var newIngredientsBatch = ingredientsBatch;
//first loop to select ingredientsBatch
var j = ingredientsBatch.length;
while (j != 0) {
    var selectedId = newIngredientsBatch[0];
    // var selectedId = newIngredientsBatch[0].id;
    console.log(selectedId, 'outerj', j);
    newIngredientsBatch = newIngredientsBatch.slice(1);
    //second loop to combine ingredientsBatch
    for (let k = 0; k < newIngredientsBatch.length; k++) {
        // combinationsArr.push(selectedId + '-' + ingredientsBatch[k].id)
        combinationsArr.push(selectedId + '-' + ingredientsBatch[k])
        console.log(combinationsArr, 'innerj', k);
    }
    j--;
}
console.log("file: T2.js ~ line 23 ~ combinationsArr", combinationsArr);
// initialIngredientsBatch.unshift({
//     combinations: combinationsArr,
// });
console.log("file: T2.js ~ line 8 ~ ingredientsBatch", ingredientsBatch);
console.log("file: T2.js ~ line 12 ~ newIngredientsBatch", newIngredientsBatch);
