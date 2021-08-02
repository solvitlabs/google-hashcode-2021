// For a team of three
const ingredientsBatch = {
    // combinations: ['0-1', '0-2', '0-3', '0-4', '1-2', '1-3', '1-4', '2-3', '2-4', '3-4'],
    combinations: ['a-b', 'a-c', 'a-d', 'a-e', 'b-c', 'b-d', 'b-e', 'c-d', 'c-e', 'd-e'],
    ingredients: [{
            id: 0,
            value: ['onion', 'pepper', 'olive']
        },
        {
            id: 1,
            value: ['mushroom', 'tomato', 'basil']
        },
        {
            id: 2,
            value: ['chicken', 'mushroom', 'pepper']
        },
        {
            id: 3,
            value: ['tomato', 'mushroom', 'basil']
        },
        {
            id: 4,
            value: ['chicken', 'basil']
        }
    ]
}
const originalIngredientsBatchIndices = ["a", "b", "c", "d", "e"];

var combinationsArr = [];
var ingredientsBatchCombinations = ingredientsBatch.combinations;
//first loop to select ingredientsBatch combinations
var j = 1;
while (ingredientsBatchCombinations.length != 0) {
    //second loop to remove the combination indices
    // from the original ingredientsBatch indices to avoid duplication
    var dualCombinationIndices = ingredientsBatchCombinations[0].split('-');
    var filteredIngredientsBatchIndices = [];
    for (let h = 0; h < originalIngredientsBatchIndices.length; h++) {
        const el = originalIngredientsBatchIndices[h];
        if (el !== dualCombinationIndices[0] && el !== dualCombinationIndices[1]) {
            filteredIngredientsBatchIndices.push(el);
        }
    }
    console.log("filteredIngredientsBatchIndices", filteredIngredientsBatchIndices);
    // var selectedId = filteredIngredientsBatchIndices[0];
    //     // filteredIngredientsBatchIndices.splice(0, 1);
    //     console.log("ingredientsBatchCombinations", ingredientsBatchCombinations);
    //     //third loop to combine original ingredientsBatch with the ingredientsBatch
    //     for (let k = 0; k < ingredientsBatchCombinations.length; k++) {
    //         combinationsArr.push(ingredientsBatchCombinations[k] + '-' + selectedId)
    //         // console.log("ingredientsBatchCombinations[k]", ingredientsBatchCombinations[k]);
    //     }
    ingredientsBatchCombinations.splice(0, 1);
    j++;
}
console.log(combinationsArr);
