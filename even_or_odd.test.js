const { even_or_odd } = require("./even_or_odd");

describe("Even or odds tests", () => {
    test("Throws error if input is not a integer", () => {
        expect(() => { 
   even_or_odd("i")
        }).toThrow(new Error("Input should be an integer"));
        })

    test("Returns 'Even' when passed an even number", () => {
        expect(even_or_odd(2)).toEqual("Even")
    })

    test("Returns 'Odd' when passed an odd number", () => {
        expect(even_or_odd(1)).toEqual("Odd")
    })
})

