const ingredients = [
    ["onion", "pepper", "olive"],
    ["mushroom", "tomato", "basil"],
    ["chicken", "mushroom", "pepper"],
    ["tomato", "mushroom", "basil"],
    ["chicken", "basil"],
];

module.exports = () => {
    const newIngredients = [];
    for (let l = 0; l < ingredients.length; l++) {
        newIngredients.push({
            id: newIngredients.length,
            value: ingredients[l],
        });
    }

    return newIngredients;
}
