function even_or_odd(num) {
    if (num === null || num === undefined) {
        throw new Error("Function takes 1 argument, 0 provided");
    }
    if (!Number.isInteger(num)) {
        throw new Error("Input should be an integer");
    }
    let remainder = Math.abs(num%2);
    if (remainder === 0) {
        return "Even";
    } else if (remainder === 1) {
        return "Odd";
    }
}

module.exports = { even_or_odd }
