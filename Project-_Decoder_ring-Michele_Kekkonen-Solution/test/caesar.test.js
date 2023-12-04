// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
    it("should encode a basic string properly using a shift",() => {
        const expected = 'wklqnixo';
        const actual = caesarModule.caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
        const actual = caesarModule.caesar("a !", 8);
        const expected = " "
        expect(actual.charAt(1)).to.equal(expected);
    });
    it("should leave special characters as is", () => {
        const actual = caesarModule.caesar("a !", 8);
        const expected = "!"
        expect(actual.charAt(2)).to.equal(expected);
    });
    it("should wrap characters around when going over 'z'", () => {
        const actual = caesarModule.caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.equal(expected);
    });
    it("should switch the direction of the shift if decoding", () => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!"
        expect(actual).to.equal(expected);
    });
    it("should return false if there is no shift value", () => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!");
        expect(actual).to.be.false;
    });
    it("should return false if the shift is greater than 25", () => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 75);
        expect(actual).to.be.false;
    });
    it("should return false if the shift is less than -25", () => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", -63);
        expect(actual).to.be.false;
    });
    it("should return false if the shift is 0", () => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 0);
        expect(actual).to.be.false;
    });
    it("should ignore capitalization of letters", () => {
        const actual = caesarModule.caesar("XYZ", 1, false);
        const expected = "wxy"
        expect(actual).to.equal(expected);
    })

})