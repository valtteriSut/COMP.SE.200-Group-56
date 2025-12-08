import map from '../src/map'

function square(n) {
   return n * n
}


describe("map funktio", () => {

    test('Erilaisten numeroiden testaaminen', () => {
        expect(map([1,-2,0.233], square)).toMatchObject([1,1,0.054289]);
    });
    
    test('null arvon testaaminen', () => {
        expect(map([null], square)).toMatchObject([0]);
    });

    test('tyhjän listan testaaminen', () => {
        expect(map([], square)).toMatchObject([]);
    });

    test('null arvon testaaminen ei listan sisällä', () => {
        expect(map(null, square)).toMatchObject([]);
    });

    test('String tyypin testaaminen', () => {
        expect(map(['2', 2], square)).toMatchObject([4,4]);
    });

    test('boolean arvot', () => {
        expect(map([true, false], square)).toMatchObject([1,0]);
    });

    test('Normaalit numerot', () => {
        expect(map([4, 8], square)).toMatchObject([16, 64]);
    });
});
