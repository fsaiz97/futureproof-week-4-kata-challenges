function sumPositiveElements(arr) {
    let expectedNumOfParams = 1;
    if (arguments.length !== expectedNumOfParams) {
        throw new Error(`Function takes 1 argument. ${arguments.length} recieved.`);
    } else if (!Array.isArray(arr)) {
        throw new Error("Function expects an array argument.");
    } else if (!arr.every(element => typeof element === "number")) {
        throw new Error("Function expects an array of numbers.");
    }

    let sum = 0;
    sum += arr.filter(element => element > 0).reduce((prev, curr) => prev + curr, 0);

    return sum
}

sumPositiveElements([1,2,3])

module.exports = { sumPositiveElements }
