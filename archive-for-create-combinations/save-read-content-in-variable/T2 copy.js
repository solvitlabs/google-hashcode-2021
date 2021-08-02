// For a team of two
const fs = require('fs');
// const util = require('util');
var convertToObject = require('./convertToObject');
// const ingredientsBatch = ["a", "b", "c", "d", "e"];
// const ingredientsBatch = ["a", "b", "c"];
// const ingredientsBatch = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
var ingredientsBatch = convertToObject();

// const inputOutput = __dirname + '/initialIngredientsBatch.json'
// const outputFile = fs.createWriteStream(inputOutput);
// outputFile.write(
//     `{"initialIngredientsBatch":${JSON.stringify(ingredientsBatch)}}`
// );
// const batch = require('./batch.json');
// console.log("file: T2.js ~ line 17 ~ batch", batch);

// const inputFile = fs.readFileSync(inputOutput);
// console.log("file: T2.js ~ line 16 ~ inputFile", (inputFile).toString());

// var inputFile = "";
// fs.readFile(inputOutput, (error, data) => {
//     if (error) {
//         throw error;
//     }
//     // console.log(data.toString());
//     // inputFile = data.toString();
//     inputFile = util.format(data);
// });
// // console.log("file: T2.js ~ line 27 ~ fs.readFile ~ inputFile", inputFile);



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
// initialIngredientsBatch.unshift({
//     combinations: combinationsArr,
// });
console.log("file: T2.js ~ line 7 ~ ingredientsBatch", ingredientsBatch);
