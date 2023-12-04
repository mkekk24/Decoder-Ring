const { expect } = require("chai");
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
    it("should encode a message by using the given substitution alphabet",() => {
        const expected = 'jrufscpw';
        const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should have all unique parameters",() => {
        const actual = substitutionModule.substitution("You are an excellent spy", "abcabcabcabcabcabcabcabcab");
        expect(actual).to.be.false;
    });
})