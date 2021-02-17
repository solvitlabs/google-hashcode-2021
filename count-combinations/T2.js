const ingredientsBatch = {
    combinations: ['0-1', '0-2', '0-3', '0-4', '1-2', '1-3', '1-4', '2-3', '2-4', '3-4'],
    ingredients: [
        {
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


const countCombinationsArr = [];
const combinationsArr = ingredientsBatch.combinations;
const ingredients = ingredientsBatch.ingredients;

for (let k = 0; k < combinationsArr.length; k++) {
    const combination = combinationsArr[k];
    var combinationIndices = combination.split('-');
    const dualCombination = ingredients[Number(combinationIndices[0])].value.concat(ingredients[Number(combinationIndices[1])].value);
    var uniqueIngredients = [];
    dualCombination.filter(function (element) {
        if (!uniqueIngredients.includes(element)) {
            uniqueIngredients.push(element);
        }
    });
    countCombinationsArr.push({
        count: uniqueIngredients.length,
        value: combination,
    });
}
ingredientsBatch.combinations = countCombinationsArr;
console.log("ingredientsBatch", ingredientsBatch);
