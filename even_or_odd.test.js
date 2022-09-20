const each = require("jest-each").default;
const { even_or_odd } = require("./even_or_odd");

describe("Even or odds tests", () => {
    test("Throws error if input is a string", () => {
        expect(() => { 
   even_or_odd("number")
        }).toThrow(new Error("Input should be an integer"));
    })

    test("Throws error is input is a string of a number", () => {
        expect(() => { 
            even_or_odd("2")
                 }).toThrow(new Error("Input should be an integer"));
    })

    test("Returns 'Even' when passed an even number", () => {
        expect(even_or_odd(2)).toEqual("Even")
    })

    test("Returns 'Odd' when passed an odd number", () => {
        expect(even_or_odd(1)).toEqual("Odd")
    })

    each([
        ["Even", -4],
        ["Odd", -3],
        ["Even", 0],
        ["Even", -0]
    ]).test("returns %s when passed %s", (expected, number) => {
        expect(even_or_odd(number)).toBe(expected);
    })
})

