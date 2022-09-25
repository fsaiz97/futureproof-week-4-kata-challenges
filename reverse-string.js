function reverseString(str) {
    if (arguments.length !== 1) {
        throw new Error(`This function expects 1 argument, ${arguments.length} recieved.`)
    } else if (typeof str !== "string") {
        throw new Error("This function expects a string argument.");
    }

    let result = "";
    for (let i = (str.length - 1); i >= 0; i--) {
        result += str[i];
    }

    return result
}

module.exports = { reverseString };
