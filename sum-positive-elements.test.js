const { sumPositiveElements } = require("./sum-positive-elements");
const each = require("jest-each").default;

describe("sumPositiveElements tests", () => {
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
