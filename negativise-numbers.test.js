const { makeNegative } = require("./negativise-numbers")

describe("makeNegative", () => {
    test("Positive input", () => {
        expect(makeNegative(4)).toEqual(-4)
    })

    test("Negative input", () => {
        expect(makeNegative(-7)).toEqual(-7)
    })

    test("Zero input", () => {
        expect(makeNegative(0)).toEqual(0)
    })

    test("Empty input", () => {
        expect( () => {
            makeNegative()
        }).toThrow( new Error("Function must have an input"))    
    })

    test("Not integer input", () => {
        expect( () => {
            makeNegative("-5")
        }).toThrow(new Error("Must be an integer"))
    })
})
















































































































