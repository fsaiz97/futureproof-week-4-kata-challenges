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

    it("Throws an error when not passed a group with the proper format", () => {
        expect(() => {
            splitTheBill({A: "1", B: 3});
        }).toThrow(new Error("Invalid input format. {name: integer, ...} expected"))

        expect(() => {
            splitTheBill({A: 1, B: [1, 2]});
        }).toThrow(new Error("Invalid input format. {name: integer, ...} expected"))

        expect(() => {
            splitTheBill({A: 1, B: true});
        }).toThrow(new Error("Invalid input format. {name: integer, ...} expected"))

        expect(() => {
            splitTheBill({A: 1, B: {C: 12, V: 3}});
        }).toThrow(new Error("Invalid input format. {name: integer, ...} expected"))

    })

    it("Throws an error when if given a negative number in the group", () => {
        expect(() => {
            split({A: 10, B: -1})
        }).toThrow(new Error("Object values must be positive"));
    })

    each([
        [{A: 5, B: 0, C: -5}, {A: 20, B: 15, C: 10}]
    ]).test("Returns %s when passed %s", (expected, group) => {
        expect(splitTheBill(group)).toEqual(expected);
    })
})
