function even_or_odd(num) {
    if (num%2 === 0) {
        return "Even";
    } else if (num%2 === 1) {
        return "Odd";
    } else {
        throw new Error("Input should be an integer");
    }
}

module.exports = { even_or_odd }
