const { reverseString } = require("./reverse-string");
const each = require("jest-each").default;

describe("reverseString tests", () => {
    it("Throws an error when passed the wrong number of arguments", () => {
        expect(() => {
            reverseString();
        }).toThrow(new Error("This function expects 1 argument, 0 recieved."));
        
        expect(() => {
            reverseString("first", "second");
        }).toThrow(new Error("This function expects 1 argument, 2 recieved."));

        expect(() => {
            reverseString("first", "second", "third", "fourth");
        }).toThrow(new Error("This function expects 1 argument, 4 recieved."));
    })

    it("Throws an error when not passed a string", () => {
        expect(() => {
            reverseString(123);
        }).toThrow(new Error("This function expects a string argument."));

        expect(() => {
            reverseString(["string"]);
        }).toThrow(new Error("This function expects a string argument."));

        expect(() => {
            reverseString(true);
        }).toThrow(new Error("This function expects a string argument."));

        expect(() => {
            reverseString({"name": "value"});
        }).toThrow(new Error("This function expects a string argument."));
    })

    each([
        ["gnirts", "string"],
        ["gNiTseT", "TesTiNg"],
        ["54321", "12345"],
        ["racecar", "racecar"]
    ]).test("Returns %s when passed %s", (expected, str) => {
        expect(reverseString(str)).toBe(expected);
    })
})
