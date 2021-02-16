function idGenerator() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

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
            id: idGenerator(),
            value: ingredients[l],
        });
    }

    return newIngredients;
}
