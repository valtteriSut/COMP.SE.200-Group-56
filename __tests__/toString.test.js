import toString from "../src/toString";

describe("toString", () => {
    test('toString', () => {
        expect(toString(['1',1,'-1',-1])).toBe('1,1,-1,-1')
    });
    test('toString', () => {
        expect(toString([0, 10, null])).toBe('0,10,')
    });
    test('toString', () => {
        expect(toString([null, 'null', -0.2405])).toBe(',null,-0.2405')
    });
    test('toString', () => {
        expect(toString(-+10)).toBe('-10')
    });
});