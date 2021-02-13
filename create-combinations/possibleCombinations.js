function factorial(n) {
    if (!n) {
        return 1;
    }
    let fact = 1;
    for (let l = 1; l <= n; l++) {
        fact *= l;
    }
    return fact;
}

module.exports = function (n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}
