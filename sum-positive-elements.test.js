const { sumPositiveElements } = require("./sum-positive-elements");
const each = require("jest-each").default;

describe("sumPositiveElements tests", () => {
    it("Throws error when called with no arguments", () => {
        expect(() => {
            sumPositiveElements()
        }).toThrow(new Error("Function takes 1 argument. 0 recieved."))
    })

    it("Throws error when called with too many arguments", () => {
        expect(() => {
            sumPositiveElements([1, 2], [3, 4])
        }).toThrow(new Error("Function takes 1 argument. 2 recieved."))
    })

    it("Throws an error when the argument is not an array", () => {
        expect(() => {
            sumPositiveElements("array")
        }).toThrow(new Error("Function expects an array argument."))
        expect(() => {
            sumPositiveElements(10)
        }).toThrow(new Error("Function expects an array argument."))
        expect(() => {
            sumPositiveElements({"array": 10, "false": -10})
        }).toThrow(new Error("Function expects an array argument."))
    })

    it("Throws an error if any of the array's elements are not a number", () => {
        expect(() => {
            sumPositiveElements(['1', 2, 4])
        }).toThrow(new Error("Function expects an array of numbers."))
        expect(() => {
            sumPositiveElements([1, [1, 2], 4])
        }).toThrow(new Error("Function expects an array of numbers."))
        expect(() => {
            sumPositiveElements([1, 2, "abc", 4])
        }).toThrow(new Error("Function expects an array of numbers."))
        expect(() => {
            sumPositiveElements([true, 2, 4])
        }).toThrow(new Error("Function expects an array of numbers."))
        expect(() => {
            sumPositiveElements(['1', 2, {"name": 10}])
        }).toThrow(new Error("Function expects an array of numbers."))
    })

    each([
        [10, [1, 2, 3, 4]],
        [104, [1, -4, 3, -10, 100]],
        [0, [0, 0, 0]],
        [0, [-1, -2, -3, -4]],
        [0, []]
    ]).test("Returns %s when passed %s", (expected, arr) => {
        expect(sumPositiveElements(arr)).toBe(expected);
    })
})
