import toString from "../src/toString";

describe("toString funktio", () => {
    test('Numero ja String tyyppejä', () => {
        expect(toString(['1',1,'-1',-1])).toBe('1,1,-1,-1')
    });
    test('null arvo ja numeroita', () => {
        expect(toString([0, 10, null])).toBe('0,10,')
    });
    test('null arvoja', () => {
        expect(toString([null, 'null', -0.2405])).toBe(',null,-0.2405')
    });
    test('-+ numero', () => {
        expect(toString(-+10)).toBe("-10")
    });
    test('tyhjä', () => {
        expect(toString()).toBe("")
    });
    test('null', () => {
        expect(toString(null)).toBe("")
    });
    test('undefined', () => {
        expect(toString(undefined)).toBe("")
    });
    test('boolean', () => {
        expect(toString(true)).toBe("true")
    });
});
