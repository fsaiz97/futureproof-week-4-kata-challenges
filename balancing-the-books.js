// { name: number, ... }

function splitTheBill(group) {
    if (arguments.length !== 1) {
        throw new Error(`Function expects 1 argument. ${arguments.length} recieved.`)
    } else if (!Object.values(group).every(value => typeof value === "number")) {
        throw new Error("Invalid input format. {name: integer, ...} expected");
    } else if ((!Object.values(group).every(value => value >= 0))) {
        throw new Error("Object values must be positive");
    }

    let total = Object.values(group).reduce((prev, curr) => prev + curr, 0);
    let averagePaid = total / Object.keys(group).length;
    let newValues = Object.values(group).map(value => Math.round((value - averagePaid + Number.EPSILON) * 100) / 100);
    let keys = Object.keys(group);
    let newEntries = keys.map((key, index) => [key, newValues[index]]);
    return Object.fromEntries(newEntries);
}

module.exports = { splitTheBill }
