const each = require("jest-each").default;
const { splitTheBill } = require("./balancing-the-books");

describe("splitTheBill tests", () => {
    it("Throws an error when passed the wrong number of arguments", () => {
        expect(() => {
            splitTheBill();
        }).toThrow(new Error("Function expects 1 argument. 0 recieved."))

        expect(() => {
            splitTheBill({A: 20, B: 15, C: 10}, "string");
        }).toThrow(new Error("Function expects 1 argument. 2 recieved."))

        expect(() => {
            splitTheBill(123, {A: 20, B: 15, C: 10}, true, 3.14);
        }).toThrow(new Error("Function expects 1 argument. 4 recieved."))
    })

    // it("Throws an error when not passed a group with the proper format", () => {
    //     splitTheBill({A: })
    // })

    each([]).test("Returns %s when passed %s", (expected, group) => {
        expect(splitTheBill(group)).toBe(expected);
    })
})
